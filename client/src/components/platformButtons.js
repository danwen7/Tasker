import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";

const StyledHr = styled.hr`
  margin: 12px 0px 20px;
  flex: 1 1 0%;
  border-top: 1px solid rgb(217, 218, 220);
`;

const StyledSpan = styled.span`
  flex: 0.3 1 0%;
  align-self: center;
  text-align: center;
  line-height: 1px;
  font-weight: 700;
  font-size: 12px;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  text-transform: uppercase;
`;

const StyledPlatformButton = styled.button`
  display: block;
  pointer-events: none;
  transition: border-color 200ms ease-in 0s;
  box-sizing: border-box;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  background-color: ${(props) => props.color};
  border-radius: 12px;
  border: 3px solid transparent;
  padding: 10px;
  margin-top: 10px;
  border: "1px solid black";
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
`;

const PlatformButtons = function () {
  return (
    <div>
      <StyledPlatformButton color="#3b5998">
        <FacebookIcon sx={{ color: ["white"], marginRight: ["5px"] }}></FacebookIcon>
        <ButtonText>Continue with Facebook</ButtonText>
      </StyledPlatformButton>

      <StyledPlatformButton color="black">
        <AppleIcon sx={{ color: ["white"], marginRight: ["5px"] }}></AppleIcon>
        <ButtonText>Continue with Apple</ButtonText>
      </StyledPlatformButton>

      <StyledPlatformButton color="white" style={{ border: "1px solid black" }}>
        <FcGoogle style={{ marginRight: "5px" }} />
        <ButtonText style={{ color: "black" }}>Continue with Google</ButtonText>
      </StyledPlatformButton>

      <div style={{ display: "flex", justifyContent: "row" }}>
        <StyledHr></StyledHr>
        <StyledSpan>OR</StyledSpan>
        <StyledHr></StyledHr>
      </div>
    </div>
  );
};

export default PlatformButtons;
