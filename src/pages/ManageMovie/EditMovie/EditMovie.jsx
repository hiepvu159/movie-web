import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SideBarAdmin from "../../../components/SideBarAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import PropTypes from "prop-types";

EditMovie.propTypes = {};

function EditMovie(props) {
  const [currency, setCurrency] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="flex flex-col w-full">
        <HeaderAdmin />
        <div className="px-3">
          <div className="font-bold text-3xl pt-5 pl-1">Sửa Thông Tin Phim</div>
          <div className=" pt-5 pb-10">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
              noValidate
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
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Tên gốc"
                    className="w-1/2"
                    defaultValue=""
                  />
                </div>
                <div className="flex justify-between">
                  <TextField
                    required
                    id="outlined-required"
                    label="Thumbnail URL"
                    className="w-1/3"
                    defaultValue=""
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Poster URL"
                    className="w-1/3"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Danh mục   "
                    value={currency}
                    className="w-1/3"
                    onChange={handleChange}
                  ></TextField>
                </div>
                <div className="flex justify-between">
                  <TextField
                    required
                    id="outlined-required"
                    label="Loại phim"
                    defaultValue=""
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Đạo diễn"
                    defaultValue=""
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Diễn viên"
                    className="w-1/3"
                    defaultValue=""
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Quốc gia"
                    defaultValue=""
                  />
                </div>
                <div className="flex justify-between">
                  <TextField
                    required
                    id="outlined-required"
                    label="Năm phát hành"
                    defaultValue=""
                    className="w-1/3"
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Số tập hiện tại"
                    defaultValue=""
                    className="w-1/3"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Tổng số tập"
                    defaultValue=""
                    className="w-1/3"
                  />
                </div>
                <div className="flex justify-between">
                  <TextField
                    required
                    id="outlined-required"
                    label="Thời lượng"
                    defaultValue=""
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Link phim"
                    className="w-1/2 "
                    defaultValue=""
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Trạng thái"
                    defaultValue=""
                  />
                </div>
              </div>
            </Box>
          </div>
          <div className="flex justify-end">
            <button className="mr-24 btn-create">Tạo mới</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMovie;
