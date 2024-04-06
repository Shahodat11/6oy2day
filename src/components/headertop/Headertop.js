import React from 'react'
import '../headertop/headertop.css'
function Headertop() {
  return (
    <>
    <div className="container">
      <div class="nav-link1">
        <div class="top">
          <p class="p">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          </p>
          </div>
          <div class="nav1">
            <a href="#">ShopNow</a>
          </div>
          <select className='option' name="option" id="lang"><option value="English">English</option>
          <option value="Russian">Russian</option>
          <option value="Uzbek">Uzbek</option>
          </select>
        </div>    
    </div>
    </>
  )
}

export default Headertop