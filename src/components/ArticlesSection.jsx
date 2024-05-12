import React,{useState,useEffect} from "react";
import Card from "./Card";
import axios from "axios";

const ArticlesSection = () => {

    // massivin parcalanmasi(array destructuring)
const[melumatlar,setMelumat]=useState([])
useEffect(()=>{
axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-04-12&sortBy=publishedAt&apiKey=77028469fb3d491bb847bff9e9448a8a")
.then ((xeberler)=> {
    setMelumat(xeberler.data.articles)
})
}, [])


  return (
    <div>
      <div className="articles-two ">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* properties-xususiyyetler props */}
           
            <Card kartinShekli="/assets/images/blog1.jpeg" kartinBashligi="yeniXeber"kartinParaqrafi="Burada sizin reklaminiz ola biler:)"/>
          </div>
          <div className="col-12 col-md-6 ">
          <Card kartinShekli="/assets/images/blog2.png" kartinBashligi="React 2018"kartinParaqrafi="Meqalemiz"/>
          </div>
        </div>
      </div>

      <div className="articles-tree  ">
<div className="row">
{
    melumatlar .map(birXeber=> (
        <div className="col-12 col-md-6 col-lg-4">
        <Card  kartinShekli={birXeber.urlToImage} kartinBashligi={birXeber.title.slice(0,50)} kartinParaqrafi={birXeber.description}/>
      </div>

    ))
}
</div>
      </div>
    </div>




  );
};

export default ArticlesSection;
