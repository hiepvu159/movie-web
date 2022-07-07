import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Select from "react-select";
import { addMovies } from "../../../services/movie";
import "./CreateMovie.css";
import { useEffect } from "react";
import { getCategory } from "../../../services/category";

export default function CreateMovie() {
  const [name, setName] = useState("");
  const [originName, setOriginName] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [country, setCountry] = useState("");
  const [poster, setPoster] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [year, setYear] = useState("");
  const [episode, setEpisode] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getCategory(setCategories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = {
      name: name,
      origin_name: originName,
      content: content,
      thumb_url: thumbnail,
      poster_url: poster,
      type: type,
      status: status,
      country: country,
      director: director,
      actor: actor,
      year: year,
      time: time,
      episodes_total: episodes,
      episode_current: episode,
      category: category,
      link: link,
    };
    addMovies(newMovie);
    console.log("ok");
  };

  return (
    <div className="px-3">
      <div className="font-bold text-3xl pt-3 pl-1">Tạo Phim Mới</div>
      <div className=" py-5">
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
              <TextField
                required
                id="outlined-required"
                label="Tên phim"
                defaultValue=""
                className="w-1/2"
                size="small"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Tên gốc"
                className="w-1/2"
                defaultValue=""
                size="small"
                onChange={(e) => setOriginName(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <TextField
                required
                id="outlined-required"
                label="Loại phim"
                defaultValue=""
                size="small"
                className="w-1/3"
                onChange={(e) => setType(e.target.value)}
              />

              <Select
                isMulti
                options={categories}
                className="w-full z-10 mt-2"
                onChange={(e) => setCategory(e.va)}
              />
              <TextField
                required
                id="outlined-required"
                label="Trạng thái"
                defaultValue=""
                size="small"
                className="w-1/3"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <TextField
                required
                id="outlined-required"
                label="Thumbnail URL"
                className="w-1/2"
                defaultValue=""
                size="small"
                onChange={(e) => setThumbnail(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Poster URL"
                className="w-1/2"
                defaultValue=""
                size="small"
                onChange={(e) => setPoster(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <TextField
                required
                id="outlined-required"
                label="Đạo diễn"
                defaultValue=""
                className="w-1/3"
                size="small"
                onChange={(e) => setDirector(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Diễn viên"
                className="w-1/2"
                defaultValue=""
                size="small"
                onChange={(e) => setActor(e.target.value)}
              />

              <TextField
                required
                id="outlined-required"
                label="Quốc gia"
                defaultValue=""
                className="w-1/3"
                size="small"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <TextField
                required
                id="outlined-required"
                label="Năm phát hành"
                defaultValue=""
                className="w-1/4"
                size="small"
                onChange={(e) => setYear(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Thời lượng"
                className="w-1/4"
                defaultValue=""
                size="small"
                onChange={(e) => setTime(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Số tập hiện tại"
                defaultValue=""
                className="w-1/4"
                size="small"
                onChange={(e) => setEpisode(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Tổng số tập"
                defaultValue=""
                className="w-1/4"
                size="small"
                onChange={(e) => setEpisodes(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <TextField
                required
                id="outlined-required"
                label="Nội dung"
                className="w-1/2 pl-2"
                defaultValue=""
                multiline
                rows="3"
                size="small"
                onChange={(e) => setContent(e.target.value)}
              />

              <TextField
                required
                id="outlined-required"
                label="Link"
                className="w-1/2 pl-2"
                defaultValue=""
                multiline
                rows="3"
                size="small"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <div onClick={handleSubmit} className="flex justify-end">
            <button className="mr-24 btn-create">Tạo mới</button>
          </div>
        </Box>
      </div>
    </div>
  );
}
