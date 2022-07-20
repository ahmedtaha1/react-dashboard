import React from "react";
import Side from "../../components/sidebar/Side";
import Nav from "../../components/navbar/Nav";
import Chart from "../../components/chart/Chart";
import "./single.scss";
import img from "../../man.webp";
import List from "../../components/table/Table";

function Single() {
  return (
    <div className="single">
      <Side />
      <div className="container">
        <Nav />
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={img} alt="" />
              <div className="details">
                <h1 className="title">Jane Doe</h1>
                <div className="info">
                  <span className="key">Email:</span>
                  <span className="value">janedoe@gmail.com</span>
                </div>
                <div className="info">
                  <span className="key">Phone</span>
                  <span className="value">+1 2313 12 14</span>
                </div>
                <div className="info">
                  <span className="key">Address:</span>
                  <span className="value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="info">
                  <span className="key">Country:</span>
                  <span className="value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
