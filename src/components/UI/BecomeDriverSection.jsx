import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; 
import driverImg from "../../assets/all-images/Equipments/harvester_orig.jpg";
import { useNavigate } from "react-router";
// import { color } from "@mui/system";
const BecomeDriverSection = () => {
 
   const Navigate=useNavigate();
  const becomeDriver=()=>{
        Navigate('/become-driver');
  }

  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            {/* <button className="btn become__driver-btn mt-4"> */}
              
                  <Link style={{background:'#fff', color:'#000d6b'}} to="/equipments" className=" btn become__driver-btn mt-4" onClick={becomeDriver}>
                  <i  class="ri-login-circle-line"></i>  Come Join Us
                 </Link>
          
            {/* </button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
