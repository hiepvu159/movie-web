import { Routes, Route } from "react-router-dom";
import HomeUser from "./pages/HomeUser";
import "./App.css";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import Layout from "./layout/LayoutUser/Layout";
import AllMovie from "./pages/AllMovie";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import HomeAdmin from "./pages/HomeAdmin";
import CreateMovie from "./pages/ManageMovie/CreateMovie/CreateMovie";
import Manage from "./pages/ManageMovie/Manage";
import EditMovie from "./pages/ManageMovie/EditMovie/EditMovie";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<HomeUser />} />
          <Route path="/admin/movie/create" element={<CreateMovie />} />
          <Route path="/admin/movie/edit/:id" element={<EditMovie />} />
          <Route path="/admin/movie" element={<Manage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/results/movie" element={<SearchResult />} />
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
