import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", to: '/' },
    { title: "UserManagement", src: "User", gap: true, to: '/users' },
    { title: "Post Management", src: "Search", to: '/posts' },
    // { title: "Search", src: "Search" },
  ];
  const userName = localStorage.getItem("userName")
  const handleLogout = () => {
    localStorage.removeItem('userName')
    navigate('/login')
  }
  return (
    <div
      className={` ${open ? "w-72" : "w-20 "
        } bg-gray-600 min-h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-0 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
            }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
            }`}
        >{userName}
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            onClick={() => navigate(Menu?.to)}
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-8" : "mt-2"}  `}
          >
            <img src={`./src/assets/${Menu.src}.png`} className='w-6 h-6' />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
        <li>
          <div
            onClick={handleLogout}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2`}>
            <img src={`./src/assets/logout.png`} className='w-6 h-6' />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar