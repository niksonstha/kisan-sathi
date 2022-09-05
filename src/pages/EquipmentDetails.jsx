import React, { useState,useEffect,useContext } from "react";
import {db} from '../Config/Firebase';

import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import styled from "styled-components";

// import Checkout from "./Checkout";
import { Container, Row, Col } from "reactstrap";
import { AuthContext } from "../context/AuthContext";
const EquipmentsDetails = (props) => {


    const Button = styled.button`
           border-radius: 10%;
            width: 150px;
            padding: 10px;
            border: none;
            background-color:#000d6b;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
`;


      // const Navigate=useNavigate();
      let arr=[];
      const [data,setData]=useState({})
      const { idd } = useParams();
 
          useEffect(() => {

          // data=null;  
         const fetchData= async () => {
        try{
             const docRef = doc(db, "users", idd);
             const docSnap = await getDoc(docRef);

              arr.push(docSnap.data())
              console.log("Document data:", docSnap.data());
    
               setData(docSnap.data());
            //  } else {
             
                console.log("No such document!");
            // }   
          }catch(err){
              console.log(err)
            }
       }

        fetchData();
      },[])




      //  const fName='Full Name';
       const name=data.displayName;
       const Description= data.Description;
       const price=data.Price;
       const address=data.address;
      //  const email=data.email;
       const phone=data.phone;
       const img=data.img;
       const fullName=data.fName;
       console.log(fullName);

     console.log(Description);
     const {currentUser}=useContext(AuthContext);

      return (
          
        <Helmet title={name}>
            <section>
                  <Container>
                       <Row>
                          <Col lg="6">
                          <img src={img} alt="" className="w-100" />
                         </Col>
                          <Col lg="6">
                             <div style={{
                               marginLeft: '24px'

                             }} className="car__info">
                                  <h2 className="section__title">{name}</h2>
                            
                                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                  <h6 className="rent__price fw-bold fs-4">
                                  Rs {price}.00 / Day
                                  </h6>
                                </div>
                                
                                <span style={{fontSize:'1rem'}} className=" d-flex align-items-center gap-2">
                                <span style={{ color: "#f9a826" }}>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                 </span>
                                   {address}
                                  {/* (address  4 ratings) */}
                                 </span>
                                <p style={{fontSize:'1rem'}} className="section__description">
                                  {Description}
                               </p>
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {phone}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {name}
                  </span>

                

                </div> 
        
          {currentUser  &&   
          <Button 
         
          style={{  
            textDecoration:'none',
            borderRadius:'3%',
            MarginTop:'36px',
         
           }}>
                <Link to={`/checkout/${idd}`}>Book now</Link>
           
           </Button>}
          
          {!currentUser && 
            <span><h2>To book item you need to login !! </h2></span>
          
            }
          </div>
                          </Col>   
                        </Row>
                        </Container>
               </section>
        </Helmet>                             
    )
  }

  

export default EquipmentsDetails;
