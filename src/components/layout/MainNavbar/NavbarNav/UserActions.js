import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkTokenAndReturn } from "../../../../axios";
import * as actions from "../../../../store/actions";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    let display = (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle tag={NavLink} className="text-nowrap px-3 pt-3">
          <span className="d-flex d-md-inline-block">Login</span>
        </DropdownToggle>
      </NavItem>
    );

    let { isAuth } = this.props;

    if (isAuth) {
      display = (
        <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
          <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
            <img
              className="user-avatar rounded-circle mr-2"
              src={require("./../../../../images/avatars/guest_user.png")}
              alt="User Avatar"
            />{" "}
            <span className="d-none d-md-inline-block">{isAuth.username}</span>
          </DropdownToggle>
          <Collapse tag={DropdownMenu} right small open={this.state.visible}>
            <DropdownItem tag={Link} to="user-profile">
              <i className="material-icons">&#xE7FD;</i> Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="edit-user-profile">
              <i className="material-icons">&#xE8B8;</i> Edit Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="file-manager-list">
              <i className="material-icons">&#xE2C7;</i> Files
            </DropdownItem>
            <DropdownItem tag={Link} to="transaction-history">
              <i className="material-icons">&#xE896;</i> Transactions
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag={Link} to="/" className="text-danger">
              <i className="material-icons text-danger">&#xE879;</i> Logout
            </DropdownItem>
          </Collapse>
        </NavItem>
      );
    }
    return <>{display}</>;
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(UserActions);
