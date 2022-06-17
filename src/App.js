import { Routes, Route } from "react-router-dom";
import HomeUser from "./pages/HomeUser/HomeUser";
import "./App.css";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <div className="App">
      <>
        {/* <MoviePage /> */}
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phim" element={<LandingPage />} />
          <Route path="/phim/test" element={<MoviePage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
