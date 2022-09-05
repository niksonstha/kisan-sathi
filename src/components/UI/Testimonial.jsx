import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";


import ava01 from "../../assets/Customers/ava-1.jpg.png";
import ava02 from "../../assets/Customers/ava-2.jpg.png";
import ava03 from "../../assets/Customers/ava-3.jpg.png";
import ava04 from "../../assets/Customers/ava-4.jpg.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Mr. Ashish Pawar , hails from Ahmednagar district of Maharashtra. 1 months ago, He rented a drip irrigation set for his crop.With the help and support from us he make it and ofcourse with his hard work. 
          This is attributed towards good crop management practices like land preparation, seed selection, seed treatment.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ashish Pawar</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
         

Hailing from Kopargaon village in Ahmednagar , Mr. Shivaji Jadhav is a progressive farmer who gives his machinary on rent via our site . 
With this he generate revenue in off season also. He offer many machinary as tractors, cultivator and seeders etc.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Shivaji Jadhav</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Mr. Pandurag Waghmare , hails from wagholi Pune district of Maharashtra. 1 months ago, He rented sprinker  set for his crop. 
          With the help our site support, at present, his soyabean crop is way nicely grown. This is attributed towards good crop management practices like land preparation, seed selection, 
          seed treatment.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Pandurag Waghmare</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
            Mr. Suresh Yadav , is from Sinnar  Nashik district of Maharashtra 2 months ago, he had given his harvester on renting purpose. 
          With the help our site support, at present he have earn lot more than he expected. He was very happy for having support from us.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Suresh Yadav</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
