import React from "react";
import { Link } from "react-router-dom";
import renderDetailInfo from "../../utils/jsxColGenerator";

const Card = ({ franchise }) => {
  return (
    <div className="col s12 m6 l3 ">
      <div className="card box-focus" style={{ height: "530px" }}>
        <div
          style={{
            height: "180px",
            marginBottom: "10px",
            border: "1px solid #90a4ae",
          }}
        >
          <img
            src={franchise.logo}
            style={{ width: "100%", height: "170px", alignContent: "center" }}
            alt={`logo ${franchise.name}`}
          />
        </div>
        <div className="card-content">
          <span className="card-title">{franchise.name}</span>
          <div style={{ fontSize: "1rem", height: "100px", overflow: "auto" }}>
            {franchise.description}
          </div>
          <br />
          {renderDetailInfo("Vốn lưu động: ", franchise.work_capital, false)}
          {renderDetailInfo(
            "Vốn lưu động 6 tháng: ",
            franchise.sixMonthWorth_work_capital, false
          )}
          <br />
          <Link
            to={`/franchise/chi-tiet/${franchise.id}`}
            style={{
              position: "absolute",
              left: "0px",
              bottom: "5px",
              width: "100%",
            }}
            className="center waves-effect red darken-3 btn"
          >
            Chi tiết thông số
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
