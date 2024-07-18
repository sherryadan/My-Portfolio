import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Adan </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I have just graduated as a Software Engineer from University of Agriculture Faislabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning stops when soul leaves the body"{" "}
          </p>
          <footer className="blockquote-footer">Adan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
