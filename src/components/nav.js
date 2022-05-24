import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledP = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: rgb(31, 28, 46);
  font-weight: 400;
`;

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledUlContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const StyledNavLi = styled.li`
  list-style-type: none;
  padding: 5px;
  opacity: 0.7;
  color: black;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCtaLogin = styled.a`
  ${(props) =>
    props.signUp
      ? `border: 2px solid black; font-weight:bold`
      : "border: 2px solid transparent"};
  padding: 5px 10px 5px;
  margin: 10px;
`;

const StyledImage = styled.img``;

const Nav = function (props) {
  return (
    <div>
      <StyledNavContainer>
        <p>placeholder</p>
        <StyledUlContainer>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledNavLi>Home</StyledNavLi>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledNavLi>Why SaaS</StyledNavLi>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledNavLi>Features</StyledNavLi>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledNavLi>Blog</StyledNavLi>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <StyledNavLi>Docs</StyledNavLi>
          </Link>
        </StyledUlContainer>
        <StyledLoginContainer>
          <StyledCtaLogin>Log in</StyledCtaLogin>
          <StyledCtaLogin signUp>Sign up</StyledCtaLogin>
        </StyledLoginContainer>
      </StyledNavContainer>
    </div>
  );
};

export default Nav;
