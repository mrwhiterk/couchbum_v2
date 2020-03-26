import React from "react";
import { Container, Row, Col, Form, FormInput, Button, FormTextarea } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import { connect } from "react-redux";
import { checkTokenAndReturn } from "../axios";
import * as actions from "../store/actions";

class AddNewListing extends React.Component {
  state = {
    title: "",
    street: "",
    city: "",
    state: "",
    ZIP: "",
    description: "",
    mainPicture: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    let address = {};
    address.street = this.state.street;
    address.city = this.state.city;
    address.state = this.state.state;
    address.ZIP = this.state.ZIP;

    let data = {
      title: this.state.title,
      address,
      description: this.state.description,
      images: [this.state.mainPicture]
    }

    try {
      await this.props.createListing({...data, host: this.props.isAuth._id});
      this.setState({
        title: "",
        street: "",
        city: "",
        state: "",
        ZIP: "",
        description: "",
        mainPicture: ""
      })
      this.props.history.push('/listings')
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Add New Listing"
            subtitle="Open your space"
            className="text-sm-left"
          />
        </Row>

        {/* <Row> */}
        {/* Editor */}
        {/* <Col lg="9" md="12">
        <Editor />
      </Col> */}

        {/* Sidebar Widgets */}
        {/* <Col lg="3" md="12">
        <SidebarActions />
        <SidebarCategories />
      </Col> */}
        {/* </Row> */}
        <Form onSubmit={this.handleSubmit} md={{ size: 6 }}>
          <Row form>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <h4>Headline</h4>
              <FormInput
                value={this.state.title}
                placeholder="title"
                required
                name="title"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback valid>The first name looks good!</FormFeedback> */}
            </Col>

            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <h4>Address</h4>
              <FormInput
                value={this.state.street}
                placeholder="street"
                required
                name="street"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback valid>The last name looks good!</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.city}
                placeholder="city"
                required
                name="city"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.state}
                placeholder="state"
                required
                name="state"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <FormInput
                value={this.state.ZIP}
                placeholder="zip"
                required
                name="ZIP"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <h4>Description</h4>
              <FormTextarea
                value={this.state.description}
                size="lg"
                className="mb-3"
                placeholder="description"
                required
                name="description"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormInput
                size="lg"
                className="mb-3"
                placeholder="Your Post Title"
              /> */}
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
            <Col md={{ size: 8, offset: 0 }} className="form-group">
              <h4>Main Picture</h4>
              <FormInput
                value={this.state.mainPicture}
                placeholder="picture"
                required
                name="mainPicture"
                type="text"
                onChange={this.handleChange}
              />
              {/* <FormFeedback>The username is taken.</FormFeedback> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" size="lg">
                Post
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  createListing: data => dispatch(actions.listingActions.CreateListing(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddNewListing);
