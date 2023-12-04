import React from 'react'
import '../styles/banner.css'
import banner from '../img/banner-side-img.jpg'

function Banner() {
  return (
     <div className='header-section'>
              <div className='img'>
              <img className='headerSection-img' src={banner} alt=""></img>
              </div>
              <div className='banner-info'>
              <h1 className='banner-title'>Avery Davis</h1>
              <h6 className='banner-secondary-title'>GRAPHIC DESIGNER</h6>
              <p className='banner-text'>I am a Graphic Designer based in Trempleway. My specializations include digital branding and visual design.</p>
        
              </div>
         </div>
  )
}

export default Banner
