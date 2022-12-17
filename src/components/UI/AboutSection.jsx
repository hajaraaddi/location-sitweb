import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">FAVORISER UNE EXCELLENTE CULTURE.</h2>
              <h5 className="section__description">
              
Nous croyons qu’il est important de soutenir une culture progressive permettant à tous nos associés de se sentir à la maison, de profiter d’opportunités égales et de se développer avec nous. Notre culture repose donc sur 5 valeurs centrales, qui donnent le ton pour définir comment nous travaillons ensemble, comment nous nous comportons les uns envers les autres au profit de chacun, et comment nous encourageons un esprit d’équipe unique..
              </h5>

             
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
