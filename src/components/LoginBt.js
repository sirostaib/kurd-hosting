import React, { Component } from "react";
import styled, { css } from "styled-components";

function LoginBt(props) {
  return (
    <Container {...props}>
      <Login>Login</Login>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(217,217,217,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Login = styled.span`
  font-family: Open Sans;
  color: rgba(0,0,0,1);
  font-size: 24px;
  font-weight: 700;
  align-self: center;
`;

export default LoginBt;
