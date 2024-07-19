import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Virtual Assistant"
              description="Personal Desktop Assistant, which can perform all basic tasks like opening different applications, playing music, sending messages, and Wikipedia searches. Supports speech input. It was developed in Python using some libraries plus an OPENAI api was also used."
              ghLink="https://github.com/sherryadan/Virtual-Assistant--Final-Year-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Food Ordering System"
              description="A more or less an ECOMMERCE Store developed in Asp.net framework. Has a master page too and a bit of backend work was also done in C#. It was my 4th semester project of Visual Programming."
              ghLink="https://github.com/sherryadan/Food-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Textutils"
              description="My first Project in React, a basic web app which can play with text. Can convert, edit, count, copy and delete text. This is a very basic application beacuse of the fact that I was just getting familiar with React js."
              ghLink="https://github.com/sherryadan/React-Js---TextUtils"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="News Honey"
              description = "Second React Project which is a NEWS App. It uses external News API and fetch news and display it. This is  responsive and slightly technical website. It may sound simple to you if you are experienced developer but it got me sweating at a point."
              ghLink="https://github.com/sherryadan/NewsHoney---A-React-News-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
