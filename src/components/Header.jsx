import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/Header/Footer/Createx.png"
import { FaRegUser } from "react-icons/fa6";
// Shirin
export default function Header() {
  return (
    <header className='bg-[#EFD0C5]'>
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center p-7">
          <NavLink to={"/"}><img className='w-32.5' src={logo} alt="" /></NavLink>
          <nav>
            <ul className='flex gap-10'>
              <li>
                <NavLink to={"/about"} className="">About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/course"} className="">Courses</NavLink>
              </li>
              <li>
                <NavLink to={"/event"} className="">Events</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} className="">Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="">Contacts</NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <button className='bg-[#FF3F3A] px-10 py-2 text-amber-50 '>Get consultation</button>
            <div className="flex items-center gap-2.5">
              <FaRegUser />
              <button>Log in / Register</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
