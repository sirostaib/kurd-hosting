import React, { Component } from "react";
import styled, { css } from "styled-components";

function accountBt(props) {
  return (
    <Container {...props}>
      <Account>Account</Account>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
  flex-direction: row;
  border-radius: 100px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 3px;
  border-color: rgba(255,255,255,1);
  border-style: solid;
`;

const Account = styled.span`
  font-family: Open Sans;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

export default accountBt;
