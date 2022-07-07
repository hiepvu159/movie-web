import axios from "axios";

const token = localStorage.getItem("token");

export const getCategory = async (setCategory) => {
  await axios
    .get(`/categories`, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
    .then((res) => setCategory(res.data));
};
