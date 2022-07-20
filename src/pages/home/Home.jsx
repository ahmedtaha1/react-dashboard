import React from "react";
import Side from "../../components/sidebar/Side";
import Nav from "../../components/navbar/Nav";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
function Home() {
  return (
    <div className="home">
      <Side />
      <div className="container">
        <Nav />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
