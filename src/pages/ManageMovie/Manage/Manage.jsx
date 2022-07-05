import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { getMovies } from "../../../services/movie";

function Manage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(setMovies);
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <div>
          <div className="manage-movie-main">
            <div className="main-title">
              <span className="action-name">Quản lý</span>
              <Link to="/admin/movie/create">
                <button className="btn-create">Tạo mới</button>
              </Link>
            </div>

            <div>
              <TableContainer component={Paper}>
                <Table className="w-full" aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Tên phim</StyledTableCell>
                      <StyledTableCell align="left">Thể loại</StyledTableCell>
                      <StyledTableCell align="left">Loại phim</StyledTableCell>
                      <StyledTableCell align="left">Quốc Gia</StyledTableCell>
                      <StyledTableCell align="left">Năm</StyledTableCell>
                      <StyledTableCell align="left">Tình trạng</StyledTableCell>
                      <StyledTableCell align="left">Ngày đăng</StyledTableCell>
                      <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {movies.map((movie) => (
                      <StyledTableRow key={movie._id}>
                        <StyledTableCell align="left">
                          {movie.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.category}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.type}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.country}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.year}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.episode_current}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {movie.time}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Link to="/admin/movie/edit/:id">
                            <button>
                              <AiFillEdit className="icon-edit" />
                            </button>
                          </Link>
                          <button>
                            <AiFillDelete className="icon-delete" />
                          </button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
