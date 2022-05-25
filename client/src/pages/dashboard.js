import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Logo.JPG";
import Nav from "../components/nav";
import CtaImage from "../assets/Isometric.png";
import Example from "../assets/Example.png";
import DashboardSidebar from "../components/dashboardSidebar";

const Dashboard = function () {
  return (
    <div>
      <DashboardSidebar></DashboardSidebar>
    </div>
  );
};

export default Dashboard;
