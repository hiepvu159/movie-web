import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeUser from "./pages/HomeUser";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import Layout from "./layout/LayoutUser/Layout";
import Admin from "./layout/LayoutAdmin/Admin";
import AllMovie from "./pages/AllMovie";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import HomeAdmin from "./pages/HomeAdmin";
import CreateMovie from "./pages/ManageMovie/CreateMovie";
import Manage from "./pages/ManageMovie/Manage";
import EditMovie from "./pages/ManageMovie/EditMovie/EditMovie";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const check = (Component) => {
    return currentUser && currentUser.isAdmin ? <Component /> : <></>;
  };

  return (
    <div className="App">
      <Routes>
        {currentUser && currentUser.isAdmin ? (
          <>
            <Route element={<Admin />}>
              <Route path="/admin" element={<HomeAdmin />} />
              <Route path="/admin/movie/create" element={<CreateMovie />} />
              <Route path="/admin/movie/edit/:id" element={<EditMovie />} />
              <Route path="/admin/movie" element={<Manage />} />
            </Route>
            <Route path="/" element={<ErrorPage />} />
          </>
        ) : (
          <>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeUser />} />
              <Route path="/register" element={<Register />} />
              <Route path="/results/movie" element={<SearchResult />} />
              <Route path="/movies" element={<AllMovie />} />
              <Route path="/movies/:id" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/movies/:id/watch" element={<MoviePage />} />
            </Route>
            <Route path="/admin" element={<ErrorPage />} />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
