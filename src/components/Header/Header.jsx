import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"

function Header() {
  return (
    <div className='holder'>
       <header className='header'>
             <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'> find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore aliquam animi dolorem mollitia quos ducimus quam, nihil voluptates a optio porro, obcaecati quibusdam vero modi doloremque! Iste, rerum quas.
                </p>
                <SearchForm/>
            </div>
       </header>
    </div>
  )
}

export default Header