import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className=' bg-dark py-5'>
   <div className="container footer">
   <div className='row'>
<div className="col-12 col-md-4">
    <img src="/assets/images/footerLogo.svg" alt="" />
</div>
<div className="col-12 col-md-4">
  <h4 className='text-white'>Contact Us</h4>
  <div className="mail">
    <p className='text-secondary'>
    If you want to implement your business ideas: </p>
 <a href="mailto:" className='text-white'> hello@pecodesoftware.com</a>
  </div>
  <div className="mail">
    <p className='text-secondary'>
    If you are looking for new career opportunities: </p>
 <a href="mailto:" className='text-white'> career@pecodesoftware.com</a>
  </div>
</div>
      </div>
   </div>


    </div>
  )
}

export default Footer
