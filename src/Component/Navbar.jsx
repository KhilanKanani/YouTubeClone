import { useState } from "react";
import "./Navbar.css";
import { UseAuth } from "../ContextApi/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [Input, setInput] = useState("");
  const { setvalue } = UseAuth();
  const navigate = useNavigate();

  function handleSearch() {
    setvalue(Input);
    setInput("");
    navigate("/");
  }

  function handleSpeech() {

  }

  return (
    <div className="fixed left-0 right-0 bg-white top-0 z-[1]">
      <div className="flex justify-between items-center sm:px-5 px-2 py-2 w-[100%]">
        {/* First */}
        <div className="flex items-center justify-center sm:gap-4 gap-1">
          <img src="3LineIcon.png" className="h-10 w-10 ThreeLineIcon" onClick={toggleSidebar} />

          <div className="flex gap-0.5 items-center">
            <img src="Youtube.png" className="h-7 w-7" />
            <p className="logo flex"> YouTube <span className="text-[15px]">™</span></p>
          </div>
        </div>

        {/* Middle */}
        <div className="flex justify-center items-center gap-3 sm:w-[40%]">
          <div className="flex justify-center items-center relative sm:w-full">
            <input type="text" placeholder="Search..." className="pl-5 w-full pr-9 p-2 outline-0 rounded-l-full border-1 border-gray-300 hidden sm:inline" value={Input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
            {
              Input &&
              <img src="CrossLogo.jpg" className="h-6 w-6 absolute right-13 hidden sm:inline" onClick={() => (setInput(""))} />
            }

            <img src="SearchLogo.png" className="hidden sm:inline h-[41px] w-11 border-1 border-l-0 rounded-r-full border-gray-300 searchLogo cursor-pointer" onClick={handleSearch} />
            <img src="SearchLogo.png" className="inline sm:hidden h-[41px] w-11 cursor-pointer" onClick={() => navigate("/search")} />
          </div>

          <img src="MicroPhone.png" className="h-10 w-10 cursor-pointer MicroPhone hidden sm:inline" onClick={handleSpeech} />
        </div>

        {/* Last */}
        <div className="sm:flex hidden gap-2">
          <img src="VcameraLogo.png" className="h-10 w-10 rounded-full lastHover" />
          <img src="BellIcon.png" className="h-10 w-10 rounded-full lastHover" />
          <img src="ChatlyDp.png" className="h-10 w-10 rounded-full border-1 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
