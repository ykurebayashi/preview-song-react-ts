import styled from "styled-components";

export const MainContainer = styled.div `
    display:flex;
    flex-direction: column;
    alignt-items:center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
export const LoginDiv = styled.div`
    display:flex;
    flex-direction: column;
    alignt-items:center;
    justify-content: center;
    
    width: 90%;
    height: 500px;

    border: 1px solid black;
    border-radius: 10px;

    margin: auto;
`
export const CustomH1 = styled.h1`
    text-align:center;
    margin-bottom: 15px;
`
export const EmailInput = styled.input`
    height: 5vh;
    width: 80%;
    margin: 15px auto;
    text-align:center;
`

export const LoginButton = styled.button`
    height: 5vh;
    width: 80%;
    margin: 15px auto;
    text-align:center;
`