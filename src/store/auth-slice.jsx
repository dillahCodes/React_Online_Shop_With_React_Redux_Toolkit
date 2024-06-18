import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/auth-services";
import { jwtDecode } from "jwt-decode";

// Thunk untuk mendapatkan data user dari API
export const fetchUser = createAsyncThunk("auth/fetchUser", async (_, { rejectWithValue }) => {
  try {
    // Mendapatkan ID user dari localStorage
    const userToken = localStorage.getItem("userTokenFakeStore");
    const userId = jwtDecode(userToken).sub;
    // Memanggil service untuk mendapatkan data user berdasarkan ID
    const response = await authServices.getUserById(userId);
    // Mengembalikan data user dari respons API
    return response.data;
  } catch (error) {
    // Menangani error dan mengembalikan pesan error menggunakan rejectWithValue
    console.error("error while fetching data user", error.response.data);
    return rejectWithValue(error.response.data);
  }
});

// Membuat slice untuk mengelola state autentikasi
const authSlice = createSlice({
  // Nama slice
  name: "auth",
  // State awal untuk slice auth
  initialState: {
    user: null, // Menyimpan data user
    status: "idle", // Menyimpan status proses pengambilan data (idle, loading, succeeded, failed)
    error: null, // Menyimpan pesan error jika ada
  },
  // Reducer untuk tindakan logout
  reducers: {
    /**
     * Menghapus data user dari state saat logout
     * @param {Object} state - State saat ini
     */
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userTokenFakeStore");
    },
  },
  // Menangani tindakan tambahan yang dibuat oleh createAsyncThunk
  extraReducers: (builder) => {
    builder
      /**
       * Mengubah status menjadi "loading" saat fetchUser dipanggil
       * @param {Object} state - State saat ini
       */
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      /**
       * Mengubah status menjadi "succeeded" dan menyimpan data user saat fetchUser berhasil
       * @param {Object} state - State saat ini
       * @param {Object} action - Aksi yang di-dispatch
       * @param {Object} action.payload - Data user yang diambil dari API
       */
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      /**
       * Mengubah status menjadi "failed" dan menyimpan pesan error saat fetchUser gagal
       * @param {Object} state - State saat ini
       * @param {Object} action - Aksi yang di-dispatch
       * @param {Object} action.payload - Pesan error dari API
       */
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Mengekspor aksi logout agar bisa digunakan di komponen
export const { logout } = authSlice.actions;

// Mengekspor reducer authSlice agar bisa digunakan untuk membuat store
export default authSlice.reducer;
