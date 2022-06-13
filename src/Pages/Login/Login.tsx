import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  LoginDiv,
  MainContainer,
  CustomH1,
  EmailInput,
  LoginButton,
} from "./style";

export const Login = () => {
  const { setName } = useContext(GlobalContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <MainContainer data-testId="Login-main">
      <LoginDiv>
        <CustomH1 data-testId="Login-header">Connect</CustomH1>
        <EmailInput
          placeholder="Insert a username"
          onChange={handleChange}
          data-testId="Login-input"
        />
        <LoginButton href="/home" data-testId="Login-btn">
          Login
        </LoginButton>
      </LoginDiv>
    </MainContainer>
  );
};
