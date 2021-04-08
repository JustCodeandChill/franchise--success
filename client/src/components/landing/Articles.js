/** @format */
import "./Articles.css";
import React from "react";
import hat from "./hat.png";
import { Link } from "react-router-dom";
import content from '../../config/articleData';

class Articles extends React.Component {
  renderCard(title, body, link) {
    return (
      <div className="col m4 l4 offset-l1 card-size" key={link}>
        <Link to={link}>
          <div
            className="card grey lighten-5 zoom"
            style={{ border: "4px solid #757575", borderRadius: "3px" }}
          >
            <div className="card-content " style={{ padding: "0 auto" }}>
              <span
                className="card-title black-text title"
                style={{ paddingTop: "0" }}
              >
                <h4>{title}</h4>
              </span>
              <p className="grey-text text-darken-2 hide-on-small-only">
                {body}
              </p>
            </div>
            <div className="card-action hide-on-small-only">
              <p>Đọc thêm</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  renderBody(content) {
    return (
      <div className="row grey lighten-5 section">
        {content.map(({ title, body, link }) => {
          return this.renderCard(title, body, link);
        })}
      </div>
    );
  }
  renderTitle() {
    return (
      <div className="row grey lighten-5 section" style={{ marginBottom: "0" }}>
        <div className="col s4 m3  l2 offset-l2">
          <img src={hat} alt="hat" />
        </div>
        <div className="col s6 m6 l5 ">
          <h3>Tin tức và bài viết mới nhất</h3>
          <p>
            Franchise.com cung cấp thông tin miễn phí và hữu ích để hướng dẫn
            bạn xuống con đường kinh doanh sở hữu doanh nghiệp của bạn
          </p>
        </div>
      </div>
    );
  }
  renderContent() {
    return (
      <div>
        {this.renderTitle()}
        {/* Các tài liệu giới thiệu */}
        {this.renderBody(content)}
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Articles;
