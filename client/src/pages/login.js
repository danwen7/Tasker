import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../gql/mutations";
import Auth from "../utils/auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";
import PlatformButtons from "../components/platformButtons";

const StyledSignupHeader = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 45px;
  color: rgb(31, 28, 46);
  font-weight: 700;
  opacity: 0.9;
  margin-bottom: 10px;
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

const StyledSignupP = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: rgb(31, 28, 46);
  font-weight: 600;
  opacity: 0.7;
  padding-top: 40px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #ffc3c3;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 12px;
  outline: 0;
  border: 1px solid #ffc3c3;
  cursor: pointer;
  color: rgb(31, 28, 46);
  width: 120px;
  display: block;
  margin-top: 20px;
`;

const StyledImg = styled.img`
  width: 35%;
  margin-right: 3%;
  @media (max-width: 930px) {
    display: none;
  }
`;

const StyledWhiteDiv = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px;
  flex-direction: column;
  max-width: 55%;
  padding: 40px;
  background-color: white;
  border-radius: 30px;
  justify-content: center;
  @media (max-width: 920px) {
    width: 70%;
  }
  @media (max-width: 720px) {
    max-width: 80%;
    margin-top: 30px;
  }
  @media (max-width: 720px) {
    margin-top: 30px;
  }
`;

const StyledLogo = styled.img`
  display: block;
  width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

function Login(props) {
  document.body.style = "background-image: none; background-color: #EBDEFC ";
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <StyledLogo src={Logo} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "70vh",
        }}
      >
        <StyledWhiteDiv>
          <div>
            <StyledSignupHeader>Login to your account</StyledSignupHeader>
            <StyledSignupBreadcrumb>
              Already signed up?
              <span>
                <Link to="/signup"> Click here to signup!</Link>
              </span>
            </StyledSignupBreadcrumb>
          </div>
          <PlatformButtons></PlatformButtons>

          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <StyledSignupP>Email</StyledSignupP>
              <StyledInput
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <StyledSignupP>Password</StyledSignupP>
              <StyledInput placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
            </div>
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <StyledButton type={"submit"}>Sign In</StyledButton>
            </div>
          </form>
        </StyledWhiteDiv>
      </div>
    </>
  );
}

export default Login;
