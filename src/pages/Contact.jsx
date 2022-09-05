import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import swal from "sweetalert";
import "../styles/contact.css";
import { useNavigate } from "react-router";
const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {


    const[name ,setName]=useState();
    const[email,setEmail]=useState();
    const[message,setMessgae]=useState();
    const Navigate=useNavigate();
   
   const HandleSubmit=(event)=>{
     if(name && email && message){
             swal({
                   title:"Message Sent!",
                   text: "We'll reach you out soon!",
                   icon: "success",
                     button: "Close!",
                      });
              setEmail('');
              setMessgae('');
              setName('');
              Navigate('/home')
     }
     else{
                swal({
                     title: "Oops!",
                     text: "Incorrect Message..Try again !",
                     icon: "error",
                     button: "Try again!",
                     timer:'1500'
                      });
     }
    
   }
 
    const handleName=(e)=>{
        setName(e.target.value)   
    }
       const handleEmail=(e)=>{
        setEmail(e.target.value)   
    }
       const handleMessage=(e)=>{
        setMessgae(e.target.value)   
    }

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form   style={
                {
                    display:'flex' , flexDirection:'column',
                    height: '94%',
                    backgroundColor: '#f7f7f7',
                    padding: '35px 60px',
                    borderRadius:'51px',
                 }
                }
                // onSubmit={HandleSubmit}
                >
                <FormGroup className="contact__form">
                  <Input value={name} onChange={handleName} placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup  className="contact__form">
                  <Input  value={email} onChange={handleEmail} style={{width:'343px'}} placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    value={message}
                     onChange={handleMessage}
                     style={{width: '580px'}}
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button onClick={HandleSubmit} className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div style={{paddingLeft:'120px' , paddingTop:"26px"}} className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                    Akurdi, Pune
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">9021423716</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">gaikwadvipul196@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
