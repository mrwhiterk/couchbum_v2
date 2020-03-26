/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { checkTokenAndReturn } from "../axios";
import * as actions from "../store/actions";
import './Travelers.css';

import PageTitle from "../components/common/PageTitle";

class Travelers extends React.Component {
  componentDidMount() {
    try {
      this.props.getTravelers();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let display = "...loading";

    if (this.props.travelers) {
      display = this.props.travelers.map((post, idx) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
          <Card small className="card-post h-100">
            <div
              className="card-post__image"
              style={{
                backgroundImage: `url('${post.avatar ||
                  require("../images/avatars/guest_user.png") }')`
              }}
            />
            <CardBody>
              <h5 className="card-title">
                <a className="text-fiord-blue" href="#">
                  {post.username}
                </a>
              </h5>
              <p className="card-text">{post.bio || 'Looking for an adventure'}</p>
            </CardBody>
            <CardFooter className="text-muted border-top py-3" id="min-height">
              <span className="d-inline-block">
                <a className="text-fiord-blue" href={post.authorUrl}>
                  Skills
                </a>
                <br />
                {/* <a className="text-fiord-blue" href={post.categoryUrl}>
                  
                </a> */}
                {post.skills && post.skills.map(item => {
                  return <div key={item}>{item}</div>
                })}
                
              </span>
            </CardFooter>
          </Card>
        </Col>
      ));
    }

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Travelers"
            subtitle="Good peeps with skills to share"
            className="text-sm-left"
          />
        </Row>

        <Row>{display}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  travelers: state.userReducer.travelers,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  getTravelers: () => dispatch(actions.userActions.GetTravelers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Travelers);
