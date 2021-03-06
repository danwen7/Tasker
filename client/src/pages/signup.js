import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../gql/mutations";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Logo_Small from "../assets/Logo_Small.png";
import PlatformButtons from "../components/platformButtons";

const StyledSignupP = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: rgb(31, 28, 46);
  font-weight: 600;
  opacity: 0.7;
  padding-top: 40px;
`;

const StyledPaddingDiv = styled.div`
  padding: 20px;
`;

const ButtonText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
`;

const StyledCanbanLoader = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-bottom: 100px;
`;

const StyledSignupHeader = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 45px;
  color: rgb(31, 28, 46);
  font-weight: 700;
  opacity: 0.9;
  margin-bottom: 2%;
  @media (max-width: 921px) {
    font-size: 65px;
  }
  @media (max-width: 745px) {
    font-size: 55px;
  }
  @media (max-width: 500px) {
    font-size: 35px;
  }
`;
const StyledSignupBreadcrumb = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: rgb(31, 28, 46);
  opacity: 0.7;
`;

const StyledButton = styled.button`
  background-color: #ffc3c3;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 10px;
  outline: 0;
  border: 1px solid #ffc3c3;
  cursor: pointer;
  color: rgb(31, 28, 46);
  width: 150px;
  display: block;
  margin-top: 20px;
  @media (max-width: 500px) {
    font-size: 15px;
    width: 100px;
  }
`;

const StyledWhiteContainer = styled.div`
  width: 35%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media (max-width: 1500px) {
    width: 45%;
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-top: 30px;
  }
`;

function Signup(props) {
  document.body.style = `background-image: url(${Logo_Small}); background-color: #EBDEFC`;
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  var awaitingFormSubmit = false;

  const handleFormSubmit = async (event) => {
    awaitingFormSubmit = true;
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    console.log(mutationResponse);
    awaitingFormSubmit = false;
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "Center",
        height: "100vh",
      }}
    >
      <StyledWhiteContainer>
        {awaitingFormSubmit == true ? (
          <>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                opacity: "0.3",
              }}
            ></div>
          </>
        ) : (
          ""
        )}

        <form onSubmit={handleFormSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <StyledSignupHeader>Sign Up</StyledSignupHeader>
            <StyledSignupBreadcrumb>
              Already signed up?
              <span>
                <Link to="/login"> Click here to login!</Link>
              </span>
            </StyledSignupBreadcrumb>

            <PlatformButtons></PlatformButtons>

            <StyledSignupP>First Name</StyledSignupP>
            <TextField
              required
              name="firstName"
              id="firstName"
              label="Required"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
            />

            <StyledSignupP>Last Name</StyledSignupP>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Required"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
            />

            <StyledSignupP>Email</StyledSignupP>
            <TextField
              required
              id="email"
              name="email"
              label="Required"
              type="email"
              defaultValue=""
              variant="standard"
              onChange={handleChange}
            />

            <StyledSignupP>Password</StyledSignupP>
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={handleChange}
              sx={{
                marginBottom: "20px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <StyledButton type={"submit"}>Sign Up</StyledButton>
            </div>
          </div>
        </form>
      </StyledWhiteContainer>
    </div>
  );
}

export default Signup;
