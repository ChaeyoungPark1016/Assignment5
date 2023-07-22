/*********************************************************************************
 *  WEB422 – Assignment 5
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Chaeyoung Park  Student ID: 011784154    Date: July 21, 2023
 *  Deploy Link:https://profound-platypus-e05483.netlify.app
 ********************************************************************************/

import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


function Home() {
  return (
    <div className="homepage">
      <Container>
        <Row>
          <Col className="text-center">
            <Image
              className="neon-glow" width="80%"
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
              rounded
            />
            <br /><br /><br />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="intro-para">
              The Metropolitan Museum of Art of New York City, colloquially &quot;the Met&quot;, is the largest art museum in the Americas.
              Its permanent collection contains over two million works, divided among 17 curatorial departments. The main building at 1000 Fifth
              Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan&#x27;s Upper East Side, is by area one of the
              world&#x27;s largest art museums. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an
              extensive collection of art, architecture, and artifacts from medieval Europe.
            </p>
            <p>
              The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art education to the American people. The
              museum&#x27;s permanent collection consists of works of art from classical antiquity and ancient Egypt, paintings, and sculptures
              from nearly all the European masters, and an extensive collection of American and modern art. The Met maintains extensive holdings
              of African, Asian, Oceanian, Byzantine, and Islamic art. The museum is home to encyclopedic collections of musical instruments,
              costumes, and accessories, as well as antique weapons and armor from around the world. Several notable interiors, ranging from
              1st-century Rome through modern American design, are installed in its galleries.
            </p>
            <p>
             <a
                href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
                target="_blank"
                rel="noreferrer"
              >
                https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
