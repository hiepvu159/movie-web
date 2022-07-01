import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaPowerOff } from "react-icons/fa";

function HeaderAdmin() {
  return (
    <nav className="nav-admin">
      <form>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <HiOutlineSearch className="nav-icon" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            autoComplete="off"
          />
        </div>
      </form>
      <div className="flex">
        <img
          src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
          alt="admin-avatar"
          className="admin-avatar"
        />

        <button type="button">
          <FaPowerOff className="admin-logout" />
        </button>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
