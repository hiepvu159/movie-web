import axios from "axios";

export const getMovies = async (setMovies) => {
  await axios.get(`/movies`).then((res) => {
    setMovies(res.data);
  });
};

// export const addMovies = async (setMovies) => {
//   await axios.post(`/movies`,{
//     header:{
//       token: Bearer {localStorage.getItem('token')},
//     }
//   })
// }
