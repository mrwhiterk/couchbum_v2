import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";
import { removeAuthSideItems } from "../../../helpers";

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: this.props.isAuth
        ? removeAuthSideItems(Store.getSidebarItems())
        : Store.getSidebarItems()
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
      menuVisible: Store.getMenuState(),
      sidebarNavItems: this.props.isAuth
        ? removeAuthSideItems(Store.getSidebarItems())
        : Store.getSidebarItems()
    });
  }

  render() {
    console.log(this.state.sidebarNavItems);
    console.log(this.props.isAuth);
    
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(MainSidebar);
