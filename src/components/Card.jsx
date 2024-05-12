import React from 'react'
import './Card.css'
// ES6 2015
// obyektin parcalanmasi object distructuring




const Card = ({kartinBashligi, kartinShekli,kartinParaqrafi}) => {
   
  return (
    <div className='card border-0 px-3'>
<img src={kartinShekli} alt=""className='blog-img' />
<div className="card-body p-0 py-3">
    <h1 className='card-title'>{kartinBashligi}</h1>
    <p>{kartinParaqrafi}...</p>
    <div>

    <img src="./assets/icon/favicon.svg" alt="" />
    <span className='moderator'>Pecode team <span id="22.03.2024"></span></span>
</div>

</div>


    </div>
  )
}

export default Card