import { React, useState } from "react";
import Auth from "../utils/auth";
import styled from "styled-components";
import DvrIcon from "@mui/icons-material/Dvr";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import logo from "../assets/Logo.png";
import small_logo from "../assets/Logo_Small.png";
import { Link } from "react-router-dom";
import { QUERY_USER } from "../gql/queries";
import { useQuery } from "@apollo/client";

const StyledTasker = styled.img`
  width: 100px;
  display: inline-block;

  @media (max-width: 660px) {
    display: none;
  }
`;

const StyledTaskerSmall = styled.img`
  display: none;
  width: 30px;
  @media (max-width: 660px) {
    display: block;
  }
`;

const StyledSidebarContainer = styled.div`
  height: 100%;
  width: 12%;
  position: fixed;
  background-color: #f7f7f7;
  padding: 30px;

  @media (max-width: 660px) {
    width: 2%;
    padding: 20px;
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    display: none;
  }
  top: 0;
  left: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledSidebarLi = styled.li`
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  opacity: 0.7;
  color: rgb(31, 28, 46);
  margin-bottom: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 660px) {
    justify-content: center;
  }
  @media (max-width: 731px) {
    font-size: 12px;
  }

  &:hover {
    opacity: 1;
  }
`;

const StyledP = styled.p`
  text-decoration: none;
  color: rgb(31, 28, 46);
  @media (max-width: 660px) {
    display: none;
  }
`;

const StyledSidebarH1 = styled.h1`
  font-family: "DM Sans", sans-serif;
  color: black;
  font-weight: 700;
  opacity: 0.8;
  font-size: 20px;
  margin-bottom: 20%;
  line-height: 150%;
  @media (max-width: 731px) {
    font-size: 20px;
  }

  @media (max-width: 660px) {
    display: none;
  }
`;

const StyledBottomNav = styled.div`
  position: absolute;
  bottom: 70px;
  @media (max-width: 660px) {
    display: none;
  }
`;

const StyledUserProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

const StyledProfileLi = styled.li`
  text-decoration: none;
  list-style-type: none;
  @media (max-width: 660px) {
    display: none;
  }
`;

function DashboardSidebar({ parentRef }) {
  var profileRender = false;
  const { loading, error, data, refetch } = useQuery(QUERY_USER);

  return (
    <div>
      <StyledSidebarContainer ref={parentRef}>
        <StyledSidebarLi>
          <Link to="/">
            <StyledTasker src={logo} />
            <StyledTaskerSmall src={small_logo} />
          </Link>
        </StyledSidebarLi>
        <StyledSidebarH1>Hey, {data && data.user.firstName}!</StyledSidebarH1>

        <StyledSidebarLi>
          <HomeOutlinedIcon
            fontSize="medium"
            sx={{
              marginRight: ["10px"],
            }}
          />
          <StyledP>Home</StyledP>
        </StyledSidebarLi>

        <StyledSidebarLi>
          <DvrIcon
            fontSize="medium"
            sx={{
              marginRight: ["10px"],
            }}
          />

          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "color: rgb(31, 28, 46)",
            }}
          >
            <StyledP>Workspaces</StyledP>
          </Link>
        </StyledSidebarLi>

        <StyledSidebarLi>
          <PersonOutlineIcon
            fontSize="medium"
            sx={{
              marginRight: ["10px"],
            }}
          />
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "color: rgb(31, 28, 46)",
            }}
          >
            <StyledP>Profile</StyledP>
          </Link>
        </StyledSidebarLi>

        <StyledSidebarLi>
          <SettingsOutlinedIcon
            fontSize="medium"
            sx={{
              marginRight: ["10px"],
            }}
          />
          <StyledP>Settings</StyledP>
        </StyledSidebarLi>
        <StyledBottomNav>
          <ul>
            <StyledSidebarLi onClick={() => Auth.logout()}>Logout</StyledSidebarLi>
            <StyledSidebarLi>Support</StyledSidebarLi>
            <StyledSidebarLi>Documentation</StyledSidebarLi>
            <StyledSidebarLi>Privacy Policy</StyledSidebarLi>
          </ul>
        </StyledBottomNav>
      </StyledSidebarContainer>
    </div>
  );
}

export default DashboardSidebar;

//Workspaces, Profile, Settings,
