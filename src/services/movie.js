import axios from "axios";

const token = localStorage.getItem("token");

export const getMovies = async (setMovies) => {
  await axios.get(`/movies`).then((res) => {
    setMovies(res.data);
  });
};

export const addMovies = async (movie) => {
  await axios.post(`/movies`, movie, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
};

export const deleteMovie = async (id) => {
  await axios.delete(`/movies/${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
};
