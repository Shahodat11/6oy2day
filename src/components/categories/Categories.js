import React from 'react'
import '../categories/categories.css'
import categories from '../images/Frame 623 (1).svg'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

function Categories() {
  return (
    <>
    <div className="container">
      <div className="nav-link4">
        <div className="nav4">
          <img src={categories} alt="" />
          <h1>Browse By Category</h1>
        </div>
        <div className="nav5">
          <div className="nav6">
            <IoPhonePortraitOutline className="img6" />            
            <h5 className='h5'>Phones</h5>
          </div>
          <div className="nav6">
            <HiOutlineComputerDesktop className="img6" />            
            <h5 className='h5'>Computers</h5>
          </div>
          <div className="nav6">
            <BsSmartwatch className="img6" />            
            <h5 className='h5'>SmartWatch</h5>
          </div>
          <div className="nav6">
            <CiCamera className="img6" />            
            <h5 className='h5'>Camera</h5>
          </div>
          <div className="nav6">
            <CiHeadphones className="img6" />            
            <h5 className='h5'>HeadPhones</h5>
          </div>
          <div className="nav6">
            <IoGameControllerOutline className="img6" />            
            <h5 className='h5'>Gaming</h5>
          </div>
        </div>
      </div>    
    </div>
    </>
  )
}

export default Categories