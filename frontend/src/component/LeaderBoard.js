import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import UserDetail from "./UserDetail";
import { Link } from "react-router-dom";
import { createTransaction } from "../store/actions/transactions";
const LeaderBoard = ({ users, transactions, createTransaction }) => {
  return (
    <>
      <div className="container">
        <h3>Sushi Exchange Masters</h3>

        <button
          className="btn blue"
          onClick={() => {
            createTransaction(users);
          }}
        >
          Create Mock Transaction
        </button>

        <div className="row">
          <div className="col s12 m9">
            <ul>
              {/* <h2>User List Component</h2> */}
              <table>
                <thead>
                  <tr>
                    <th>UID</th>
                    <th>NAME</th>
                    <th>SUSHI</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.keys(users).map(uid => {
                    return uid === "bank" ? (
                      ""
                    ) : (
                      <tr>
                        <td>{uid}</td>
                        <td className="valign-wrapper">
                          <img src={users[uid].icon} class="circle" />
                          <Link to={"/user/" + uid} key={uid}>
                            <button
                              className="btn-flat teal white-text"
                              style={{ marginLeft: "2rem" }}
                            >
                              <span className=" ">{users[uid].name}</span>
                              {/* <i className="material-icons white-text ">search</i> */}
                            </button>
                          </Link>
                        </td>
                        <td>
                          <span className="gold">{users[uid].sushi}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ul>
          </div>
          {/* END: left */}
          <div className="col s12 m3">
            <p>Mock Transactions</p>
            <ul>
              {Object.keys(transactions).map(t => {
                return (
                  <li>
                    {users[transactions[t].sender].name} gives{" "}
                    {users[transactions[t].receiver].name} {transactions[t].amt}{" "}
                    sushi
                  </li>
                );
              })}
            </ul>
          </div>
          {/* END: right */}
        </div>
      </div>
    </>
  );
};

// export default LeaderBoard;

const mapStateToProps = state => {
  return {
    users: state.users.users,
    transactions: state.users.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTransaction: users => dispatch(createTransaction(users))
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  LeaderBoard
);
