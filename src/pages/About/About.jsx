import React from 'react'
import "./About.css";
import aboutImg from "../../images/about.jpg"

function About() {
  return (
   <section className='about'>
    <div className='container'>
      <div className='section-title'>
         <h2>About</h2>
      </div>

      <div className='about-content grid'>
        <div className='about-img'>
          <img src={aboutImg} alt="about" />
        </div>
        <div className='about-text'>
          <h2 className='about-title fs-26 ls-1'> About Bookstore</h2>
          <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias rem unde facilis delectus tempore cupiditate dolor labore adipisci, nemo consectetur non sint, quidem earum eveniet. Fugit soluta magni nam iure blanditiis sit! Eveniet alias nulla eligendi repellendus adipisci? Rerum accusamus tempore corporis. Quae, dolores.</p>
          <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet sunt cumque accusamus totam nihil. Quia dolorem id voluptatibus, dolor accusamus minima quam vel a, beatae porro molestiae quasi rerum!</p>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About