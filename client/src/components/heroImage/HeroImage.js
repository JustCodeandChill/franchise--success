/** @format */

import React from "react";
import "./HeroImage.css";
import SearchBox from "./SearchBox";
//component import

class HeroImage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row" id="heroImage">
          {/* The lightblue layer on top of bckground image */}
          <div className="bgrColor">
            {/* This create the grid system */}
            <div className="container">
              <p className="heroText white-text">
                Chúng tôi là công ty Franchise Success chuyên tư vấn doanh
                nghiệp
              </p>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;
