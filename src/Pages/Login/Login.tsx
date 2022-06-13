import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  LoginDiv,
  MainContainer,
  CustomH1,
  EmailInput,
  LoginButton,
} from "./style";

export const Login = () => {
  const { name, setName } = useContext(GlobalContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <MainContainer>
      <LoginDiv>
        <CustomH1>Connect</CustomH1>
        <EmailInput placeholder="Insert a username" onChange={handleChange} />
        <LoginButton href="/home">Login</LoginButton>
      </LoginDiv>
    </MainContainer>
  );
};
