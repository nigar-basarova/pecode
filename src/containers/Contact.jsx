import React from 'react'
import { ReactTyped } from "react-typed";
const Contact = () => {
  return (
    <div>

<ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
        

        <h3 className='text-center'>
        Ready to bring your idea to life?
        </h3>

        <div className='contacts-container'></div>
       </div>

  )
}

export default Contact