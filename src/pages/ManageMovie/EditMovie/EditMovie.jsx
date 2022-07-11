import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { addMovies, getMovieById } from "../../../services/movie";
import { getCategory } from "../../../services/category";
// import "./EditMovie.css";

export default function EditMovie() {
  const [name, setName] = useState("");
  const [originName, setOriginName] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [trailer, setTrailer] = useState("");
  const [country, setCountry] = useState("");
  const [poster, setPoster] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState([]);
  const [year, setYear] = useState("");
  const [episode, setEpisode] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState([]);
  const [movie, setMovie] = useState({
    name: "",
    origin_name: "",
    content: "",
    thumb_url: "",
    poster_url: "",
    type: "",
    status: "",
    trailer_url: "",
    country: "",
    director: "",
    actor: "",
    year: "",
    time: "",
    episodes_total: "",
    episode_current: "",
    category: "",
    link: "",
  });
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    getMovieById(id, setMovie);
    getCategory(setCategories);
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newMovie = {
  //     name: name,
  //     origin_name: originName,
  //     content: content,
  //     thumb_url: thumbnail,
  //     poster_url: poster,
  //     type: type,
  //     status: status,
  // trailer_url: trailer,
  //     country: country,
  //     director: director,
  //     actor: actor,
  //     year: year,
  //     time: time,
  //     episodes_total: episodes,
  //     episode_current: episode,
  //     category: category,
  //     link: link,
  //   };
  //   addMovies(newMovie, navigate);
  // };

  console.log(movie.category);
  return (
    <div className="w-full px-3">
      <div className="font-bold text-3xl pt-2 pl-1">Cập nhật</div>
      <div className=" py-3">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
            },
          }}
          autoComplete="off"
        >
          <div>
            <div className="flex justify-evenly">
              <div className="flex flex-col w-full">
                <label>Tên phim</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.name}
                  multiline
                  size="small"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Tên gốc</label>
                <TextField
                  required
                  id="outlined-required"
                  multiline
                  defaultValue={movie.origin_name}
                  size="small"
                  onChange={(e) => setOriginName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label>Loại phim</label>
                <TextField
                  defaultValue={movie.type}
                  required
                  id="outlined-required"
                  size="small"
                  multiline
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Thể loại</label>
                <Select
                  isMulti
                  defaultValue={movie.category}
                  options={categories}
                  className="w-full z-10 mt-2"
                  onChange={(e) =>
                    setCategory(Array.isArray(e) ? e.map((x) => x.label) : [])
                  }
                />
              </div>
              <div className="flex flex-col ">
                <label>Trạng thái</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.status}
                  size="small"
                  multiline
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full">
                <label>Thumbnail URL</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.thumb_url}
                  size="small"
                  multiline
                  rows="1"
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Poster URL</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.poster_url}
                  size="small"
                  multiline
                  rows="1"
                  onChange={(e) => setPoster(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Trailer URL</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.trailer_url}
                  size="small"
                  multiline
                  rows="1"
                  onChange={(e) => setTrailer(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full">
                <label>Đạo diễn</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.director}
                  size="small"
                  multiline
                  onChange={(e) => setDirector(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Diễn viên</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.actor}
                  size="small"
                  multiline
                  rows="1"
                  onChange={(e) => setActor(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Quốc gia</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.country}
                  size="small"
                  multiline
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full">
                <label>Năm phát hành</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.year}
                  size="small"
                  multiline
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Thời lượng</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.time}
                  size="small"
                  multiline
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Số tập hiện tại</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.episode_current}
                  size="small"
                  multiline
                  onChange={(e) => setEpisode(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Tổng số tập</label>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={movie.episodes_total}
                  size="small"
                  multiline
                  onChange={(e) => setEpisodes(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full">
                <label>Nội dung</label>
                <TextField
                  required
                  id="outlined-required"
                  className="pl-2"
                  defaultValue={movie.content}
                  multiline
                  rows="3"
                  size="small"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Link</label>
                <TextField
                  required
                  id="outlined-required"
                  className="pl-2"
                  // defaultValue={movie.episodes.link}
                  multiline
                  rows="3"
                  size="small"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="mr-24 btn-create">Cập nhật</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
