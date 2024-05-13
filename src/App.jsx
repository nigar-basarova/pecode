import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap'
import './App.css'

import ArticlesSection from './components/ArticlesSection'
//* komponentler gelecek
import Navbar from './Navbar'
import Introduction from './components/Introduction'

// * Marshrutlarin qurulmasi
import{BrowserRouter,Routes,Route, Router} from "react-router-dom"
import Footer from './components/Footer'
import WhatWeDo from './containers/WhatWeDo'
import NotFound from './containers/NotFound'
import Career from './containers/Career'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

const App = () =>{


return (

    <>
   
   <BrowserRouter>
   <div className='container'>
   
   
    <Navbar/>
   
   
    </div>

<Routes>
  <Route path='/'/>
  <Route path='/what-we-do' element={<WhatWeDo/>}/>
  <Route path='kariyera' element={<Career/>}/>
  <Route path='blog' element={<Blog/>}/>
  <Route path='bizimle elaqe' element={<Contact/>}/>
 
<Route path='*' element={<NotFound/>}/>
<Route/>
  </Routes>    



     <Footer/>
     </BrowserRouter>
     </>

      )}


export default App
 