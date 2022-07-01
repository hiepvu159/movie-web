import React from "react";
import PropTypes from "prop-types";
import SideBarAdmin from "../../../components/SideBarAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

Manage.propTypes = {};

function Manage(props) {
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="flex flex-col w-full">
        <HeaderAdmin />
        <div>
          <div className="manage-movie-main">
            <div className="main-title">
              <span className="action-name">Quản lý</span>
              <Link to="/admin/movie/create">
                <button className="btn-create">Tạo mới</button>
              </Link>
            </div>
            {/* <div className="pb-3">
      </div> */}
            <div>
              <table className="movie-table">
                <thead className="table-head">
                  <tr className="flex w-full">
                    <th className="col-name">Tên phim</th>
                    <th className="col-name">Thể loại</th>
                    <th className="col-name">Loại phim</th>
                    <th className="col-name">Quốc gia</th>
                    <th className="col-name">Năm phát hành</th>
                    <th className="col-name">Tình trạng</th>
                    <th className="col-name ">Ngày Đăng</th>
                    <th className="col-name action ">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="flex w-full mb-4">
                    <td className="col-item ">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="col-item">Hành động</td>
                    <td className="col-item">Chiếu rạp</td>
                    <td className="col-item">Mỹ</td>
                    <td className="col-item">1961</td>
                    <td className="col-item">Full</td>
                    <td className="col-item">22/1/2022</td>
                    <td className="col-item">
                      <Link to="/admin/movie/edit/:id">
                        <button>
                          <AiFillEdit className="icon-edit" />
                        </button>
                      </Link>
                      <button>
                        <AiFillDelete className="icon-delete" />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex w-full mb-4">
                    <td className="col-item ">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="col-item">Hành động</td>
                    <td className="col-item">Chiếu rạp</td>
                    <td className="col-item">Mỹ</td>
                    <td className="col-item">1961</td>
                    <td className="col-item">Full</td>
                    <td className="col-item">22/1/2022</td>
                    <td className="col-item">
                      <button>
                        <AiFillEdit className="icon-edit" />
                      </button>
                      <button>
                        <AiFillDelete className="icon-delete" />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex w-full mb-4">
                    <td className="col-item ">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="col-item">Hành động</td>
                    <td className="col-item">Chiếu rạp</td>
                    <td className="col-item">Mỹ</td>
                    <td className="col-item">1961</td>
                    <td className="col-item">Full</td>
                    <td className="col-item">22/1/2022</td>
                    <td className="col-item">
                      <button>
                        <AiFillEdit className="icon-edit" />
                      </button>
                      <button>
                        <AiFillDelete className="icon-delete" />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex w-full mb-4">
                    <td className="col-item ">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="col-item">Hành động</td>
                    <td className="col-item">Chiếu rạp</td>
                    <td className="col-item">Mỹ</td>
                    <td className="col-item">1961</td>
                    <td className="col-item">Full</td>
                    <td className="col-item">22/1/2022</td>
                    <td className="col-item">
                      <button>
                        <AiFillEdit className="icon-edit" />
                      </button>
                      <button>
                        <AiFillDelete className="icon-delete" />
                      </button>
                    </td>
                  </tr>
                  <tr className="flex w-full mb-4">
                    <td className="col-item ">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="col-item">Hành động</td>
                    <td className="col-item">Chiếu rạp</td>
                    <td className="col-item">Mỹ</td>
                    <td className="col-item">1961</td>
                    <td className="col-item">Full</td>
                    <td className="col-item">22/1/2022</td>
                    <td className="col-item">
                      <button>
                        <AiFillEdit className="icon-edit" />
                      </button>
                      <button>
                        <AiFillDelete className="icon-delete" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
