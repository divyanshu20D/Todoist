import React from "react";
import { BsPostcard } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdLowPriority } from "react-icons/md";

function Card({ setShowCard }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center z-[99999] rounded">
      <div className="bg-white rounded-lg w-[40%] h-[50%] px-4 pt-5 pb-3 shadow-2xl">
        <div className="flex justify-between w-full pb-2">
          <div className="font-bold text-3xl text-red-400 ">Add Todo</div>
          {/* <div>
            <button
              className="ml-4 px-2 py-1 rounded bg-black text-white"
              onClick={() => {
                setShowCard((prev) => !prev);
              }}
            >
              X
            </button>
          </div> */}
        </div>
        <div className="flex flex-col w-full p-2">
          <label className="font-semibold pb-1 text-red-400" htmlFor="Title">
            Title
          </label>
          <input
            className="rounded p-3 border-2"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col w-full p-2">
          <label className="font-semibold pb-1 text-red-400" htmlFor="Title">
            Description
          </label>
          <input
            className="rounded p-3 border-2"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="flex justify-start">
          <div className="border-1 bg-slate-300 mx-2 text-green-600 rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:text-green-600">
            <BsPostcard />
            Today
          </div>
          <div className="border-1 bg-slate-300 mx-2 rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:text-green-600">
            <IoMdPeople />
            Assignee
          </div>
          <div className="border-1 bg-slate-300 mx-2 rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:text-green-600">
            <MdLowPriority />
            Priority
          </div>
          <div className="border-1 bg-slate-300 mx-2 rounded px-2 py-1 flex items-center gap-2 cursor-pointer hover:text-green-600">
            <FaClockRotateLeft />
            Reminder
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <button className="rounded-lg flex border-[#c9c4c2] border-2 bg-[#c9c4c2] m-2 p-2 text-red-500 flex-col items-center justify-center hover:bg-slate-300 hover:text-red-500">
            Add Todo
          </button>
          <button
            onClick={() => {
              setShowCard((prev) => !prev);
            }}
            className="rounded-lg flex border-black border-2 bg-black m-2 p-2 text-white flex-col items-center justify-center hover:bg-slate-500 hover:border-slate-500 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
