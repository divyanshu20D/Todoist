import { IoNotifications } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex justify-between h-full p-4 bg-slate-400 shadow-2xl text-black">
      <div className="text-4xl font-bold">Logo.</div>
      <div className="flex gap-6">
        <IoNotifications size={25} />
        <RiAccountPinCircleLine size={25} />
      </div>
    </div>
  );
}

export default Navbar;
