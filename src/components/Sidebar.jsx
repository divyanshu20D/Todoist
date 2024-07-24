import { FcHome } from "react-icons/fc";
import { HiPlus } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";
import { LuPanelLeft } from "react-icons/lu";
import { MdNotifications, MdOutlineToday } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbCardsFilled, TbCircleLetterSFilled } from "react-icons/tb";
import { VscExtensions } from "react-icons/vsc";
import Card from "./Card";
import { useState } from "react";
import Search from "../pages/Search";
import Inbox from "./Inbox";

function Sidebar() {
  const [showCard, setShowCard] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  return (
    <div className="w-[18%] bg-[#FCFAF8] shadow-2xl flex flex-col justify-between">
      <div className="w-full bg-[#FCFAF8]">
        <div className="font-bold flex gap-4 items-center justify-between p-2   rounded m-1 ">
          <div className="flex gap-3 items-center ">
            <TbCircleLetterSFilled size={25} />
            <p className="text-[#939190] hover:text-[#000] cursor-pointer">
              divyanshu
            </p>
          </div>
          <div className="flex gap-2 text-[#939190] hover:text-[#000] cursor-pointer">
            <MdNotifications size={20} />
            <LuPanelLeft size={20} />
          </div>
        </div>
        <div
          onClick={() => {
            setShowCard((prev) => !prev);
          }}
          className="font-bold flex gap-4 items-center justify-start p-2 text-red-400  rounded m-1 hover:bg-red-200 cursor-pointer"
        >
          <HiPlus size={20} />
          <p>Add Task</p>
        </div>
        <div
          onClick={() => {
            setShowSearch((prev) => !prev);
          }}
          className=" flex gap-4 items-center justify-Start p-2  rounded m-1 hover:bg-red-200 cursor-pointer"
        >
          <IoMdSearch size={20} />
          <p>Search</p>
        </div>
        <div className=" flex items-center justify-between p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <div
            onClick={() => {
              setShowInbox((prev) => !prev);
            }}
            className="flex justify-center items-center gap-4"
          >
            <IoMailUnread size={20} />
            <p>Inbox</p>
          </div>
          <div>2</div>
        </div>
        <div className=" flex items-center justify-between p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <div className="flex justify-center gap-4 items-center">
            <MdOutlineToday size={20} />
            <p>Today</p>
          </div>
          <div>1</div>
        </div>
        <div className=" flex items-center justify-between p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <div className="flex justify-center gap-4">
            <SlCalender size={20} />
            Upcoming
          </div>
          <div>5</div>
        </div>
        <div className=" flex gap-4 items-center justify-start p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <VscExtensions size={20} />
          Filters & Lables
        </div>
        <div className="font-bold flex gap-4 items-center justify-start p-2 text-red-400  rounded m-1 hover:bg-red-200 cursor-pointer">
          <p>My Projects</p>
        </div>
        <div className="flex justify-between px-3 hover:bg-red-200 rounded p-2 cursor-pointer">
          <div className="flex justify-center">
            # Home
            <FcHome size={20} />
          </div>
          <div>5</div>
        </div>
        <div className="font-bold flex gap-4 items-center justify-start p-2 text-red-400  rounded m-1 hover:bg-red-200 cursor-pointer">
          <p>Quick-Start templates</p>
        </div>
        <div className=" flex gap-4 items-center justify-start p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <TbCardsFilled size={20} />
          Vacation Planning
        </div>
        <div className=" flex gap-4 items-center justify-start p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <TbCardsFilled size={20} />
          Wedding Planning
        </div>
        <div className=" flex gap-4 items-center justify-start p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <TbCardsFilled size={20} />
          Peter Akkies
        </div>
        <div className=" flex gap-4 items-center justify-start p-2  rounded m-1 hover:bg-red-200 cursor-pointer">
          <TbCardsFilled size={20} />
          Moving House
        </div>
      </div>
      <div className="flex justify-start gap-3 items-center pb-2 pl-6 font-bold text-[#939190] hover:text-slate-600 cursor-pointer cursor-pointer">
        <HiPlus size={20} />
        <p>Add Team</p>
      </div>
      {showCard && <Card setShowCard={setShowCard} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
      {showInbox && <Inbox setShowInbox={setShowInbox} />}
    </div>
  );
}

export default Sidebar;
