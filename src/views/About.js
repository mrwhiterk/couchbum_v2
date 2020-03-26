import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  CardBody,
  Button
} from "shards-react";

import './About.css'

import PageTitle from "../components/common/PageTitle";
// import SmallStats from "../components/common/SmallStats";
// import UsersOverview from "../components/blog/UsersOverview";
// import UsersByDevice from "../components/blog/UsersByDevice";
// import NewDraft from "../components/blog/NewDraft";
// import Discussions from "../components/blog/Discussions";
// import TopReferrals from "../components/common/TopReferrals";
import Moment from "react-moment";
import { connect } from "react-redux";
// import { checkTokenAndReturn } from "../axios";
import * as actions from "../store/actions";

const About = () => (
  <Container fluid>
    <br />
    <h2 className="mt-3 text-center">What is CouchBum</h2>
    
    <Row className="border-bottom py-2 bg-light">
      <Col md={{offset: 2}} className="d-flex mb-2 mb-sm-0 text-center">
        <h4 className="text">
         
          CouchBum is an ongoing idea to share knowledge and cheap accommadation with the world. What if we can replicate and demonetize
          AirBnb's model for finding temporary lodging. Along with that, could we address the huge skill gap between the average american and the in-demand jobs that employers are desperately trying to fill. What if we setup a trusted barter system where trained and talented individuals could share their knowledge with the world. What if we found individuals willing to open up their homes while building community and their skillset. With CouchBum, you can browse from tons of friendly faces and accommadation nationwide and maybe make a friend or 2 along the way. The terms are up to and your host/traveler. We will verify their information and provide a platform for you to connect.
        </h4>
      </Col>
    </Row>

  </Container>
  
);

export default About;
