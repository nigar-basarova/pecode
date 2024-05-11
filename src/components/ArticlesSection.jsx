import React from "react";
import Card from "./Card";

const ArticlesSection = () => {
  return (
    <div>
      <div className="articles-two ">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* properties-xususiyyetler props */}
           
            <Card kartinShekli="/assets/images/blog1.jpeg" kartinBashligi="yeniXeber"/>
          </div>
          <div className="col-12 col-md-6 ">
            <Card />
          </div>
        </div>
      </div>

      <div className="articles-tree  ">
<div className="row">
<div className="col-12 col-md-6 col-lg-4">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card />
        </div>
       
</div>
      </div>
    </div>




  );
};

export default ArticlesSection;
