import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container,Row} from "reactstrap";
// import BecomeDriverSection from "../components/UI/BecomeDriverSection";

// import driveImg from "../assets/all-images/drive.jpg";
// import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>

          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default About;
