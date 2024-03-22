import React from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi"; 

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Madurai <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
    <div className="w-10 h-10">
            <img src="https://th.bing.com/th/id/R.f3c6e5952d1cf81ff82bcc260f962568?rik=ujChi3%2fDXqgbHw&riu=http%3a%2f%2fwww.curiouscity.org%2fvisit%2fimages%2fbookmyshow-logo.png&ehk=vrbBCsK6Dx45mi47nfW5t%2fgj9h7V7tWbJARbl9QWjy8%3d&risl=&pid=ImgRaw&r=0" alt="logo" className="w-372 h-220 mt-2.5 d-block" />
          </div>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
      />
    </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-13 h-12">
            <img src="https://th.bing.com/th/id/R.f3c6e5952d1cf81ff82bcc260f962568?rik=ujChi3%2fDXqgbHw&riu=http%3a%2f%2fwww.curiouscity.org%2fvisit%2fimages%2fbookmyshow-logo.png&ehk=vrbBCsK6Dx45mi47nfW5t%2fgj9h7V7tWbJARbl9QWjy8%3d&risl=&pid=ImgRaw&r=0" alt="logo" className="w-full h-full mx-3" />  
            {/*  */}
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-white">
      {/* Large screen size */}
    <div className="hidden md:hidden lg:flex">
      <NavLg />
    </div>
    {/* Medium screen size */}
    <div className="hidden md:flex lg:hidden">
      <NavMd />
    </div>
    {/* Small screen size */}
    <div className="sm:flex md:hidden lg:hidden">
      <NavSm />
    </div>
    </nav>

  )
  
};

export default Navbar;