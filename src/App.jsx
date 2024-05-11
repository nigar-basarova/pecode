import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap'
import './App.css'
import ArticlesSection from './components/ArticlesSection'
//* komponentler gelecek
import Navbar from './Navbar'
import Introduction from './components/Introduction'




function App() {
  

  return (
    <>
    <Navbar/>
    <ArticlesSection/>
    <Introduction/>
    </>
  )
}

export default App
 