import React from "react";
import "./list.scss";
import Side from "../../components/sidebar/Side";
import Nav from "../../components/navbar/Nav";
import Datatable from "../../components/datatable/Datatable";

function List() {
  return (
    <div className="listPage">
      <Side />
      <div className="container">
        <Nav />
        <Datatable to="/users/new" title="Add New User" />
      </div>
    </div>
  );
}

export default List;
