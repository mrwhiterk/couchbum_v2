import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import './UserDetails.css';
import Moment from "react-moment";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class UserDetails extends React.Component {
  
  componentDidMount = async () => {
    try {

      await this.props.getUser(this.props.isAuth._id)
      

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    let display = <div>...Loading</div>
    console.log(this.props)

    if (this.props.user) {
      display = (
        <Card small className="mb-4 pt-3">
          <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              <img
                className="rounded-circle"
                // id="profile-picture"
                src={
                  this.props.user.avatar ||
                  require("../../images/avatars/guest_user.png")
                }
                alt={this.props.isAuth.avatar}
                width="110"
              />
            </div>
            <h4 className="mb-0">{this.props.user.username}</h4>
            <span className="text-muted d-block mb-2">
              {this.props.user.jobTitle}
            </span>
            {/* <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">person_add</i> Message
          </Button> */}
          </CardHeader>
          <ListGroup flush>
            {/* <div> */}
            {/* </div> */}
            <ListGroupItem className="px-4">
              <div className="progress-wrapper">
                <strong className="text-muted d-block mb-2">
                  {/* {userDetails.metaTitle} */}
                  About Me
                </strong>
                {this.props.user.bio || "I'm looking for a new adventure"}
                {/* <strong className="text-muted d-block mb-2">
                {performanceReportTitle}
              </strong> */}
                {/* <Progress
                className="progress-sm"
                value={userDetails.performanceReportValue}
              >
                <span className="progress-value">
                  {userDetails.performanceReportValue}%
                </span>
              </Progress> */}
              </div>
            </ListGroupItem>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                {/* {userDetails.metaTitle} */}
                Skills
              </strong>
              {this.props.user.skills && this.props.user.skills.map(item => {
                return <div>{item}</div>;
              })}
            </ListGroupItem>
          </ListGroup>
        </Card>
      );
    }
    
    return (
      <>{display}</>
    );
  }
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(actions.userActions.GetUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

// email: {
//       type: String,
//       required: true
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     isHost: {
//       type: Boolean,
//       default: false
//     },
//     isTraveler: {
//       type: Boolean,
//       default: false
//     },
//     skills: [
//       {
//         type: String
//       }
//     ],
//     listings: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Listing"
//       }
//     ],
//     avatar: String,
//     bio: { type: String }
//   },