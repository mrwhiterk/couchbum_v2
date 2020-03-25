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

import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
import UsersOverview from "../components/blog/UsersOverview";
import UsersByDevice from "../components/blog/UsersByDevice";
import NewDraft from "../components/blog/NewDraft";
import Discussions from "../components/blog/Discussions";
import TopReferrals from "../components/common/TopReferrals";
import Moment from "react-moment";
import { connect } from "react-redux";
import { checkTokenAndReturn } from "../axios";
import * as actions from "../store/actions";

class Listings extends React.Component {
  componentDidMount() {
    this.props.getListings();
  }

  render() {
    let listings = [];

    if (this.props.listings.length) {
      listings = this.props.listings.map(listItem => {
        return {
          backgroundImage: require("../images/content-management/5.jpeg"),
          category: "",
          categoryTheme: "info",
          host: listItem.host,
          authorAvatar: listItem.avatar, //require("../images/avatars/0.jpg"),
          title: listItem.title,
          description: listItem.description,
          images: listItem.images,
          date: listItem.createdAt,
          available: listItem.available
        };
      });
    }

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Listings"
            subtitle=""
            className="text-sm-left mb-3"
          />
        </Row>
        {/* // title: {
  //     type: String,
  //     required: true
  //   },
  //   address: {
  //     Street: String,
  //     City: String,
  //     State: String,
  //     ZIP: String
  //   },
  //   images: [{ type: String }],
  //   host: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User"
  //   },
  //   description: String,
  //   available: {
  //     type: Boolean,
  //     default: true
  //   } */}

        <Row>
          {listings.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{
                    backgroundImage: `url('${post.images[0] ||
                      post.backgroundImage}')`
                  }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{
                        backgroundImage: `url('${post.authorAvatar ||
                          require("./../images/avatars/guest_user.png")}')`
                      }}
                    >
                      Written by {post.host.username}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <div className="card-text d-inline-block mb-3">
                    <div className="mb-3">
                      {post.description.length > 30
                        ? post.description.slice(0, 30) + "..."
                        : post.description}
                    </div>
                    <div>
                      {post.available ? (
                        <Button size="sm" theme="success" className="mb-2 mr-1">
                          Apply
                        </Button>
                      ) : (
                        <Button size="sm" theme="danger" className="mb-2 mr-1">
                          Not Available
                        </Button>
                      )}
                    </div>
                  </div>
                  <br />
                  <div>by {post.host.username}</div>
                  <span className="text-muted">
                    <Moment format="DD MMM YYYY" date={post.createdAt} />
                  </span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Small Stats Blocks */}
        {/* <Row>
      {smallStats.map((stats, idx) => (
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
      ))}
    </Row> */}

        {/* <Row> */}
        {/* Users Overview */}
        {/* <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col> */}

        {/* Users by Device */}
        {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col> */}

        {/* New Draft */}
        {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col> */}

        {/* Discussions */}
        {/* <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col> */}

        {/* Top Referrals */}
        {/* <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col> */}
        {/* </Row> */}
      </Container>
    );
  }
}

Listings.propTypes = {
  /**
   * TBlogOverhe small stats dataset.
   */
  smallStats: PropTypes.array
};

Listings.defaultProps = {
  smallStats: [
    {
      label: "Posts",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Pages",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Comments",
      value: "8,147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "New Customers",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Subscribers",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

const mapStateToProps = state => ({
  listings: state.listingReducer.listings,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  getListings: () => dispatch(actions.listingActions.GetListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
