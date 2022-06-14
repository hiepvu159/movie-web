import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="bg-zinc-800">
      <Header />
      <Search />
      <h1 className="pl-12 pt-5 mb-4 bg-zinc-800 font-logo text-4xl">
        Phim Mới
      </h1>
      <div className="flex bg-zinc-800">
        <div className="flex flex-wrap w-3/4 px-4">
          <Card className="col-span-2" />
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
