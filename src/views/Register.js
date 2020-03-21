import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Button,
  Container,
  FormInput,
  FormSelect
} from "shards-react";

class Register extends React.Component {
  state = {
    isAuth: false,
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let data = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }

    console.log(data)
    

  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Welcome To CouchBum"
            subtitle="Register"
            className="text-sm-left mb-3"
          />
        </Row>

        {/* Small Stats Blocks */}
        {/* <Row> */}
        {/* {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))} */}
        {/* </Row> */}
        {this.state.isAuth.toString()}
        <Form onSubmit={this.handleSubmit} md={{ size: 6 }}>
          <Row form>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.email}
                placeholder="email address"
                required
                name="email"
                type="email"
                onChange={this.handleChange}
              />
              {/* <FormFeedback valid>The first name looks good!</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.username}
                placeholder="username"
                required
                name="username"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback valid>The last name looks good!</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.password}
                placeholder="password"
                required
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.confirmPassword}
                placeholder="confirm password"
                required
                name="confirmPassword"
                type="password"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" size="lg">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Register;
