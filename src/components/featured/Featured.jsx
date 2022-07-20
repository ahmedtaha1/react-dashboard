import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="Iamount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="title">Target</div>
            <div className="result negative ">
              <KeyboardArrowDownIcon />
              <div className="Iamount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Target</div>
            <div className="result positive">
              <KeyboardArrowUpIcon />
              <div className="itemAmount">$16.8</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Target</div>
            <div className="result positive">
              <KeyboardArrowUpIcon />
              <div className="Iamount">$17.3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
