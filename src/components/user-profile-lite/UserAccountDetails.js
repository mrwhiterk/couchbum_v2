import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import Moment from "react-moment";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { createListing } from "../../axios";

class UserAccountDetails extends React.Component {
  state = {
    username: "",
    email: "",
    avatar: "",
    bio: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount = async e => {
    if (this.props.isAuth) {
      await this.props.getUser(this.props.isAuth._id);
      let { user } = this.props;
      this.setState({
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        bio: user.bio
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    let data = {
      username: this.state.username,
      email: this.state.email,
      avatar: this.state.avatar,
      bio: this.state.bio,
    }

    try {
      await this.props.updateUser(this.props.isAuth._id, data);
      console.log(this.props.user)
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    // console.log(this.props.user);
    let display = <h1>...Loading</h1>;
    let { user } = this.props;
    if (this.props.user) {
      display = (
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Edit User Details</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form onSubmit={this.handleSubmit}>
                    <Row form>
                      {/* First Name */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feFirstName">Username</label>
                        <FormInput
                          // id="feFirstName"
                          id="username"
                          required
                          placeholder="username"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </Col>
                      {/* Last Name */}
                      {/* <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value="Brooks"
                        onChange={() => {}}
                      />
                    </Col> */}
                      <Col md="6" className="form-group">
                        <label htmlFor="feEmail">Email</label>
                        <FormInput
                          type="email"
                          id="feEmail"
                          required
                          placeholder="Email Address"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleChange}
                          autoComplete="email"
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Email */}

                      {/* Password */}
                      <Col md="6" className="form-group">
                        <label htmlFor="fePassword">New Password</label>
                        <FormInput
                          type="password"
                          id="fePassword"
                          placeholder="Password"
                          value={this.state.password}
                          name="password"
                          onChange={this.handleChange}
                          autoComplete="current-password"
                        />
                      </Col>

                      <Col md="6" className="form-group">
                        <label htmlFor="fePassword">Confirm Password</label>
                        <FormInput
                          type="password"
                          id="fePassword"
                          placeholder="Confirm Password"
                          value={this.state.confirmPassword}
                          onChange={this.handleChange}
                          name="confirmPassword"
                          autoComplete="current-password"
                        />
                      </Col>
                    </Row>
                    <FormGroup>
                      <label htmlFor="avatar">Avatar</label>
                      <FormInput
                        id="avatar"
                        placeholder="Avatar"
                        value={this.state.avatar}
                        name="avatar"
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Row form>
                      {/* City */}
                      {/* <Col md="6" className="form-group">
                      <label htmlFor="feCity">City</label>
                      <FormInput
                        id="feCity"
                        placeholder="City"
                        onChange={this.handleChange}
                      />
                    </Col> */}
                      {/* State */}
                      {/* <Col md="4" className="form-group">
                      <label htmlFor="feInputState">State</label>
                      <FormSelect id="feInputState">
                        <option>Choose...</option>
                        <option>...</option>
                      </FormSelect>
                    </Col> */}
                      {/* Zip Code */}
                      {/* <Col md="2" className="form-group">
                      <label htmlFor="feZipCode">Zip</label>
                      <FormInput
                        id="feZipCode"
                        placeholder="Zip"
                        onChange={this.handleChange}
                      />
                    </Col> */}
                    </Row>
                    <Row form>
                      {/* Description */}
                      <Col md="12" className="form-group">
                        <label htmlFor="feDescription">Tell us about you</label>
                        <FormTextarea
                          id="feDescription"
                          rows="5"
                          required
                          value={this.state.bio}
                          name="bio"
                          onChange={this.handleChange}
                        />
                      </Col>
                    </Row>
                    <Button theme="accent" type="submit">
                      Update Account
                    </Button>{" "}
                    *Password will not update if left blank
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      );
    }

    return <>{display}</>;
  }
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(actions.userActions.GetUser(id)),
  updateUser: (id, data) => dispatch(actions.userActions.UpdateUser(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccountDetails);
