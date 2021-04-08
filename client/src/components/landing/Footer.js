/** @format */

import React from "react";
import footer from "./footer.png";
import facebook from "./fb.png";
const style = { display: "flex", alignItems: "center" };

const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="container" style={{ width: "90%" }}>
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Liên hệ với chúng tôi</h5>
            <p className="grey-text text-lighten-4">
              Franchise success sẵn sàng làm việc với quý khách hàng 24/7
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Tại</h5>
            <ul>
              <li style={style}>
                <i className="material-icons">location_on</i>
                <span className="grey-text text-lighten-3">
                  87 - 89 Ho Ba Kien, Quan 10, TPHCM
                </span>
              </li>
              <li style={style}>
                <i className="material-icons">local_phone</i>
                <span className="grey-text text-lighten-3">028-7107-7979</span>
              </li>
              <li style={style}>
                <img className="grey-text" src={facebook} alt="facebook" />
                <span>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.facebook.com/vietfranchise/"
                  >
                    Franchise Success
                  </a>
                </span>
              </li>
              <li style={style}>
                <i className="material-icons">email</i>
                <span>
                  <a
                    className="grey-text text-lighten-3"
                    href="mailto:info@franchisesuccess.vn"
                  >
                    info@franchisesuccess.vn
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Copyright © 2020 Franchise.com
          <img src={footer} className="right" alt={'Copyright © 2020 Franchise.com'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
