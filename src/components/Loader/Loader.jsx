import React from 'react'
import "./Loader.css"
import loaderImg from "../../images/loaderImg.jpg";

function Loader() {
  return (
    <div className='loader flex flex-c'>
      <img src={loaderImg} alt="loader" />
    </div>
  )
}

export default Loader