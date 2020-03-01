import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

const UserDetail = ({ user, id }) => {
  return (
    <>
      <div className="container  ">
        <div className="row">
          <div className="col s12 m6  ">
            {/* left */}
            <div className="card z-depth-0">
              <div className="card-image">
                <img src={user.icon} className="" />
                <span class="card-title h1">
                  {user.name} - [{id}]
                </span>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            {/* END: card  */}
          </div>{" "}
          {/* END: left col  */}
          <div className="col s12 m6  ">
            {/* right */}
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">
                  Name: {user.name} - [{id}]
                </span>
                <p>
                  User Details: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Et labore quaerat quibusdam vel saepe, ab
                  voluptate accusantium culpa nemo fuga earum? Soluta amet nobis
                  officia sed neque fuga aperiam quia?
                </p>
              </div>
              {/* END: card-content */}
              <div className="card-action grey lighten-4 grey-text">
                <div
                  className="btn_panel"
                  className="valign-wrapper"
                  style={{ justifyContent: "space-around" }}
                >
                  <button className="btn teal">Received</button>
                  <button className="btn red">Given</button>
                  <button className="btn yellow black-text">Redeemable</button>
                </div>
              </div>
            </div>
            {/* END: card  */}
          </div>
          {/* END: right col  */}
        </div>{" "}
        {/* END: row */}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.users.users;
  const user = users ? users[id] : null;
  return {
    id: id,
    users: state.users.users,
    user: user
  };
};

export default connect(mapStateToProps)(UserDetail);
