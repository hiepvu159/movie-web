import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import TextField from "@mui/material/TextField";

DropdownBox.propTypes = {};

function DropdownBox() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [category, setCategory] = useState([]);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    const getCategory = async () => {
      try {
        axios
          .get(`categories`, {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmQxOGFhODI4OTBjZjM3YTFiMGY3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjU2OTk0MCwiZXhwIjoxNjU3MDAxOTQwfQ.Udp3GuQd_bY9DGpNePjW_rn8H1h3jctsI22Amj-F2e0",
            },
          })
          .then((res) => {
            console.log(res.data);
            setCategory(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
  });

  return (
    <>
      {/* <TextField
        id="outlined-select-currency"
        select
        label="Danh mục"
        value={selectedOption}
        className="w-1/3"
        onChange={handleChange}
      /> */}
    </>
  );
}

export default DropdownBox;
