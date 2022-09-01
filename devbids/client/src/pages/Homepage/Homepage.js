import React from "react";
// import React, { useState, useEffect } from 'react';
import { HashRouter as Link } from "react-router-dom";
import { Jumbotron, Container, Image, Button, Col, Row,} from "react-bootstrap";
import SearchBar from "../../components/SearchBar/SearchBar"
import allCategories from "../../data/categories"
// import Auth from '../utils/auth';
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="homepage-banner"></div>
      <Jumbotron className="jumbotron text-light bg-secondary">
        <h1>Let's Get to Work.</h1>
        <Row className="centerRow">
        <Col xs={12} md={8}>
        <SearchBar items={allCategories} placeholder = "Example: React"/>
        </Col>
        <Col xs={12} md={2}>
          <Button type='submit' size='lg'>
              Search
          </Button>
        </Col>
        <Col xs={12} md={2}>
          <Link to="/createContract">
            <Button size='lg'>Create a Contract</Button>
          </Link>
        </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row className="aboutUs bg-light p-3">
          <h1>About Us</h1>

          <p>
            DevBids was founded by a team of new freelance developers with a
            single mission: improve the workflow of all freelancers in the tech
            space. Our goal is to provide a secure and professional platform
            that both simplifies and streamlines the process of finding
            freelance developers.
          </p>
          <br></br>
          <p>
            Whether you are looking for developers or a developer looking for
            work, let us connect you with our users: professionals needing help
            from professionals just like you.
          </p>
        </Row>

        <Row className="useDevbids bg-light p-3">
          <Col>
            <Row>
              <h1>Use DevBids...</h1>
            </Row>
            <Row>
              <ul>
                <li>
                  As a vendor to post a new contract request and find a
                  developer to complete your request.
                </li>
                <li>
                  Consult with users on what to requirements expect from a
                  freelance developer when it comes to completing your request.
                </li>
                <br></br>
                <p>Or...</p>
                <br></br>
                <li>
                  As a contractor to search for posted contracts looking for
                  work in your field of expertise.
                </li>
                <li>
                  Respond to vendor contracts and communicate to set
                  professional expectations and get the job done in a way that
                  satisfies all parties.
                </li>
              </ul>
            </Row>
          </Col>
          <Col>
            <Image
              src="https://st3.depositphotos.com/34353014/36414/i/600/depositphotos_364146560-stock-photo-young-man-having-zoom-video.jpg"
              rounded
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
