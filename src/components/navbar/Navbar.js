import React from 'react'
import '../navbar/navbar.css'
import Logo from "../images/Exclusive.svg"
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
    <div class="container">
      <div className="nav-link2">
        <div className="nav1">
          <img src={Logo} alt="" />
        </div>
        <div className="nav2">
          <ul class="nav-items" id="navbar-responsive">
            <li>
              <a href="./index.html">Home </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="./pages/login.html">Sign in</a>
            </li>
          </ul>
        </div>
        <div className="nav3">
          <form action="">
            <input type="text" placeholder='What are you looking for?' />
            <LuSearch /><FaRegHeart /><IoCartOutline />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar