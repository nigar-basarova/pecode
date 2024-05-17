import React, { useEffect,useRef } from 'react'
import { ReactTyped } from "react-typed";
// third party API integration
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
const NigarinYaratdigiForm = useRef ()

const mesajiGonder= function (e){
    e.preventDefault()

    emailjs
    .sendForm('service_h4wm5od', 'template_tly3b6v', NigarinYaratdigiForm.current, {
      publicKey: 'ryNz3ijZZY66kWFf0',
    })
    .then(
      () => {
NigarinYaratdigiForm.current.reset()

        console.log('SUCCESS!');
        toast.success("Muraciyyetiniz qeyde alindi")
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error("Serverde xeta var biraz sonra cehd edin.")
      },
    );
}


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
        

        

        <div className='contacts-container my-5 position-relative'>
          <img src="/assets/icon/bezek.svg" alt="" className='footer-left' />
          <img src="/assets/icon/bezek2.svg" alt="" className='footer-right' />

            <div className="container d-flex justify-content-center ">
                <form onSubmit={mesajiGonder} className='bg-dark form p-5' ref={NigarinYaratdigiForm}>
                <h4 className='text-white'> Get in touch</h4>
            <p className=' text-secondary'>Describe your issue below. Our manager will contact you as soon as possible.</p>
                    <div className="form-group ">
                        {/*name SQL mangoose sutunun adidir */}

                        <input type="text" name='ad' placeholder='Name' className='form-control shadow-none text-white '/>
                    </div>
                    <div className="form-group my-4">
                        <input type="email" name='epoct' placeholder='Email'className='form-control shadow-none text-white'/>
                    </div>
                    <div className="form-group">
                       <textarea className='form-control shadow-none text-white'name="mesaj" id="" placeholder='Mesajiniz' ></textarea>
                    </div>
                    <div className="buttton text-center ">
                    <button>
                        Send
                    </button>
                    </div>
                    
                </form>
            </div>
            <ToastContainer />

        </div>
       </div>

  )
}

export default Contact