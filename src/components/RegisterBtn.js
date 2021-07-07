import React from "react";
import styled from "styled-components";

function RegisterBtn(props) {
  return (
    <Container {...props}>
      <Register>Register</Register>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 2px;
  border-color: rgba(255,255,255,2);
  border-style: solid;
`;

const Register = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
`;

export default RegisterBtn;
