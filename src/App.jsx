import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap'
import './App.css'
import Footer from './components/Footer'
import ArticlesSection from './components/ArticlesSection'
//* komponentler gelecek
import Navbar from './Navbar'
import Introduction from './components/Introduction'




function App() {
  

  return (
    <>
   <div className='container'>
    <Navbar/>
    <ArticlesSection/>
    <Introduction/>
   
    </div>
    
     <Footer/>
     </>
  )
}

export default App
 