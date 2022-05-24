import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Logo.JPG";
import Nav from "../components/nav";
import CtaImage from "../assets/Isometric.png";

document.body.style = "background: #FEF8F3;";

const CtaHeader = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 4rem;
  color: black;
  font-weight: 600;
  opacity: 0.9;
  text-align: left;
  margin-bottom: 30px;
`;

const CtaSubtext = styled.p`
  font-family: "DM Sans", sans-serif;
  color: black;
  opacity: 0.8;
  font-size: 2rem;
  text-align: left;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const CtaDiv = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  max-width: 30%;
`;

const StyledCtaImage = styled.img`
  max-width: 70%;
  height: auto;
  display: block;
`;

const CtaParent = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  position: relative;
  height: fit-content;
`;

const GetStartedParent = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
`;

const GetStartedButton = styled.a`
  background-color: black;
  color: white;
  padding: 10px 20px 10px;
  transition: all 0.25s ease;
  &:hover {
    color: black;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }
`;

const StyledBottomSubtext = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 60px;
`;

const Home = function () {
  return (
    <div style={{ backgroundColor: "#FEF8F3" }}>
      <Nav></Nav>
      <CtaParent>
        <div style={{ position: "relative", maxWidth: "50%" }}>
          <StyledCtaImage src={CtaImage} />
        </div>
        <CtaDiv>
          <CtaHeader>Task management made simple.</CtaHeader>
          <CtaSubtext>Plan. Divide. Conquer your tasks.</CtaSubtext>
          <GetStartedParent>
            <GetStartedButton>Get Started</GetStartedButton>
          </GetStartedParent>
        </CtaDiv>
      </CtaParent>
      <StyledBottomSubtext>
        Watch your productivity go from{" "}
        <span style={{ color: "#C6B9FF" }}>zero</span> to{" "}
        <span style={{ fontWeight: "bold", color: "#781DF1" }}>hero</span>.{" "}
        <span style={{ textDecoration: "underline" }}>Learn more</span>
      </StyledBottomSubtext>
    </div>
  );
};

export default Home;
