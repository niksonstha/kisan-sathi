import React, { useRef,useContext } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink,Navigate } from "react-router-dom";
import "../../styles/header.css";
import swal from "sweetalert";
import { AuthContext } from "../../context/AuthContext";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/equipments",
    display: "Farming Eqipments",
  },

  {
    path: "/contact",
    display: "Contact",
  },

  
];


const handleLogin=()=>{

       <Navigate to="/login" replace={true} />
  }
const handleRegister=()=>{
       <Navigate to="/register" replace={true} />
}

const handleGiveonRent=()=>{
       <Navigate to="/onrent" />
}

const logoStyleh1={
     lineHeight: '1.5rem'
}

const Header = () => {

   const {dispatch} =useContext(AuthContext);

  const handleLogout=()=>{
     dispatch({type:'LOGOUT'})
     
               swal({
                      title: "Logged Out!",
                     text: "You Logged Out Sucessfullyy!",
                     icon: "success",
                     button: "Close!",
                      });
             

     Navigate('/');
  }


  const {currentUser}=useContext(AuthContext);
 
  // console.log(currentUser);

  const menuRef = useRef(null);

  

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span style={{color:'white'}} className="header__top__help">
                  <i class="ri-phone-fill"></i> 9021423716
                </span>
              </div>
            </Col>

           { currentUser==null && 
             <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1" onClick={handleLogin}>
                  <i  class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/register" className=" d-flex align-items-center gap-1" onClick={handleRegister}>
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
           }
           {
             currentUser!=null &&   
              <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/onrent" className=" d-flex align-items-center gap-1" onClick={handleGiveonRent}>
                  <i  class="ri-login-circle-line"></i> Give On Rent
                </Link>

                <Link to="/register" className=" d-flex align-items-center gap-1" onClick={handleLogout}>
                  <i class="ri-user-line"></i> Logout
                </Link>
              </div>
            </Col>
           }
            
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1 style={logoStyleh1}>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i  class="ri-car-line"></i>
                    <h1 style={{fontSize:'1.4rem',fontWeight:'bold', padding:'2px 4px',color:"#000d6b" }}> Rent Farming Equipment <br/> Services</h1>
                    {/* <span style={logoSpan}>
                      Rent Farming Equipment <br /> Service
                    </span> */}
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Pune City, India</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="3"
              className=" d-flex align-items-center justify-content-end "
            >
              <button  className="header__btn btn ">
                <Link to="/contact">
                  <i style={{alignItems:"center"}} class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
