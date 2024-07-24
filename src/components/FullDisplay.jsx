import React from "react";
import Sidebar from "./Sidebar";
import Display from "./Display";
import { Link, Outlet } from "react-router-dom";
import Inbox from "../pages/inbox";
import Search from "../pages/Search";

function FullDisplay() {
  return (
    <div>
      <div className="h-screen bg-black">
        <div className="h-[100%] flex bg-red-500">
          <Sidebar />
          <Display />
        </div>
      </div>

      {/* <nav>
        <ul>
          <li to="/inbox">
            <Inbox />
          </li>
          <li to="/search">
            <Search />
          </li>
        </ul>
      </nav> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default FullDisplay;
