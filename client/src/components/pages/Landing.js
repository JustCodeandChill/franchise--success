/** @format */

import React from "react";
//data
import { top25Section as top25sectionConfig } from "../../config/sectionData";
import { categorySection as categoryConfig } from "../../config/sectionData";
//component import
import HeroImage from "../heroImage/HeroImage";
import Section from "../section/Section";
import Articles from "../landing/Articles";
import HorizontalList from "../common/HorizontalList";

class Landing extends React.Component {
  render() {
    return (
      <div className="wrapper grey lighten-2">
        <HeroImage />
        <Section config={top25sectionConfig} />
        <Section config={categoryConfig} />
        <Articles />
        <HorizontalList />
      </div>
    );
  }
}

export default Landing;
