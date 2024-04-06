import React from 'react'
import  '../ourproducts/ourproducts.css'
import mainLogo from '../images/Frame 619 (4).svg'
import mainImg from '../images/Frame 616.svg'

function OurProducts() {
 const data = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    img: "https://i.postimg.cc/vmJHp8Kq/img-1.png",
    price: "100",
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    img: "https://i.postimg.cc/ZKwYJxgy/img-2.png",
    price: "360",
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    img: "https://i.postimg.cc/JhkRcVhb/img-3.png",
    price: "700",
  },
  {
    id: 4,
    title: "Curology Product Set ",
    img: "https://i.postimg.cc/XqXHd3jW/img-4.png",
    price: "500",
  },
  {
    id: 5,
    title: "Kids Electric Car",
    img: "https://i.postimg.cc/kMhh9Vsg/img-5.png",
    price: "960",
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    img: "https://i.postimg.cc/15kCnLLx/img-6.png",
    price: "1150",
  },
  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    img: "https://i.postimg.cc/YCQX1dHv/img-7.png",
    price: "660",
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    img: "https://i.postimg.cc/fbZ85YzB/img-8.png",
    price: "660",
  },
];
let mapCard = data?.map((products) => (
  <div className="products__card" key={products.id}>
    <div className="card-hero-img">
      <img src={products.img} alt="product-img" />
    </div>
    <h2>{products.title}</h2>
    <h6>{products.price}$</h6>
  </div>
));

  return (
    <>
    <div className="container">
      <div className="nav-link5">
        <div className="nav7">
          <img src={mainLogo} alt="" />
        </div>
        <div className="nav8">
          <img src={mainImg} alt="" />
        </div>
        <div className="nav9">
          <div className="cards">
            <mapCar/>
          </div>
        </div>
      </div>
      <div className="cards-products">
        {mapCard}
      </div>
    </div>
    </>
  )
}

export default OurProducts