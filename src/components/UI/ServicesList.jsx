import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="6" md="4" sm="6" className="mb-3">
    <div  style={{  
             paddingLeft: '150px'  
             
        
        }}  className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6 style={{fontSize:"1.4rem",
             fontWeight:'bold'
         
           }}>{item.title}</h6>
      <p style={{fontSize:"1rem"}} className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
