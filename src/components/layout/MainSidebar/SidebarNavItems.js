import React from "react";
import { Nav } from "shards-react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { removeAuthSideItems, removeAddNewPost } from "../../../helpers";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;

    let loggedInActions = null;

    let display = null;

    if (this.props.isAuth) {
      loggedInActions = removeAuthSideItems(this.state.navItems);
    } 

    if (loggedInActions) {
      display = loggedInActions.map((item, idx) => (
        <SidebarNavItem key={idx} item={item} />
      ));
    } else {
      display = removeAddNewPost(items).map((item, idx) => (
        <SidebarNavItem key={idx} item={item} />
      ));
    }

    
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {display}
        </Nav>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(SidebarNavItems);
