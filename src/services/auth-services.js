import axios from "axios";

const authServices = {
  login: async (username, password) =>
    axios.post(
      "https://fakestoreapi.com/auth/login",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),
  getUserById: async (userId) =>
    axios.get(`https://fakestoreapi.com/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  register: async (email, userName, password) => {
    axios.post(
      "https://fakestoreapi.com/users",
      { email, userName, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default authServices;
