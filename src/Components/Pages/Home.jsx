import React from "react";
import Carousel from "../HomeLayout/Carousel";
import UtilityOrganizations from "../HomeLayout/UtilityOrganizations";
import QuickAction from "../HomeLayout/QuickAction";
import LatestOffers from "../HomeLayout/LatestOffers";
import FinancialTools from "../HomeLayout/FinancialTools";
import NeedHelp from "../HomeLayout/NeedHelp";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <UtilityOrganizations></UtilityOrganizations>
      <QuickAction></QuickAction>
      <LatestOffers></LatestOffers>
      <FinancialTools></FinancialTools>
      <NeedHelp></NeedHelp>
    </div>
  );
};

export default Home;
