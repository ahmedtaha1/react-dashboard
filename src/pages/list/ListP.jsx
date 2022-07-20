import React from "react";
import "./list.scss";
import Side from "../../components/sidebar/Side";
import Nav from "../../components/navbar/Nav";
import Datatable from "../../components/datatable/Datatable";

function ListP() {
  return (
    <div className="listPage">
      <Side />
      <div className="container">
        <Nav />
        <Datatable to="/products/new" title="Add New Product" />
      </div>
    </div>
  );
}

export default ListP;
