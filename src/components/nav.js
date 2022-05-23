import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Logo.JPG";

const StyledP = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: rgb(31, 28, 46);
  font-weight: 400;
`;

const StyledNavContainer = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledNavLi = styled.li``;

const StyledImage = styled.img``;

const Nav = function (props) {
  return (
    <div>
      <StyledNavContainer>
        <StyledImage src={logo} />
        <StyledNavLi></StyledNavLi>
      </StyledNavContainer>
    </div>
  );
};

export default Nav;
