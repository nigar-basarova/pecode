import React from 'react'
import { ReactTyped } from "react-typed";
const Contact = () => {


  return (
    <div>

<ReactTyped
      strings={[
        " Ready to bring your idea to life?",
        "Xidmet seviyyesinin olculme meqsedi",
        "Lorem ipsum",
      ]}
      typeSpeed={40}
      backSpeed={50}
     className='h3 d-flex justify-content-center my-4'
      loop
    >
   
       
       
    </ReactTyped>
        

        

        <div className='contacts-container my-5'>
          
            <div className="container d-flex justify-content-center ">
                <form action="" className='bg-dark form p-5'>
                <h4 className='text-white'> Get in touch</h4>
            <p className=' text-secondary'>Describe your issue below. Our manager will contact you as soon as possible.</p>
                    <div className="form-group ">
                        {/*name SQL mangoose sutunun adidir */}

                        <input type="text" name='ad' placeholder='Name' className='form-control shadow-none '/>
                    </div>
                    <div className="form-group">
                        <input type="email" name='epoct' placeholder='Email'className='form-control shadow-none'/>
                    </div>
                    <div className="form-group">
                       <textarea name="mesaj" id="" cols="30" rows="10" placeholder='Mesajiniz' className='form-control shadow-none'></textarea>
                    </div>
                    <div className="buttton text-center">
                    <button>
                        Send
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
       </div>

  )
}

export default Contact