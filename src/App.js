import { Routes, Route } from "react-router-dom";
import HomeUser from "./pages/HomeUser";
import "./App.css";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import Layout from "./layout/Layout";
import AllMovie from "./pages/AllMovie";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<HomeUser />} />
          <Route path="/movies" element={<AllMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/id" element={<LandingPage />} />
          <Route path="/movie/id/watch" element={<MoviePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
