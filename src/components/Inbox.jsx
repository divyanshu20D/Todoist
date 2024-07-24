import React from "react";
import { BsPostcard } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

function Inbox({ setShowInbox }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center z-[99999] rounded shadow-lg">
      <div className="bg-slate-100 w-[40%] h-[40%] rounded-lg text-black ">
        <div className="flex justify-between">
          <div className="font-bold text-3xl p-3 text-slate-600">Inbox</div>
          <div className="px-3 font-bold text-2xl">
            <button
              onClick={() => {
                setShowInbox((prev) => !prev);
              }}
            >
              x
            </button>
          </div>
        </div>
        <div className="flex justify-start text-black-400 border-b-2 py-2 mx-6">
          <input className="mx-4" type="checkbox" name="" id="" />
          <div>Go to Gym at 5:00 pm</div>
          <div className="border-1 bg-slate-300 mx-2 text-red-600 rounded px-2  flex items-center gap-2 cursor-pointer hover:text-red-600">
            <BsPostcard />5 July
          </div>
        </div>
        <div className="flex justify-start text-black-400 border-b-2 py-2 mx-6">
          <input className="mx-4" type="checkbox" name="" id="" />
          <div>Office at 9:00 am</div>
          <div className="border-1 bg-slate-300 mx-2 text-red-600 rounded px-2  flex items-center gap-2 cursor-pointer hover:text-red-600">
            <SlCalender />6 July
          </div>
        </div>
        <div className="flex justify-start items-center text-black-400 border-b-2 py-2 mx-6">
          <input className="mx-4" type="checkbox" name="" id="" />
          <div>Lunch at 2:00 pm</div>
          <div className="border-1 bg-slate-300 mx-2 text-red-600 rounded px-2  flex items-center gap-2 cursor-pointer hover:text-red-600">
            <SlCalender />7 July
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
