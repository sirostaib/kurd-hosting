import React from "react";
import styled from "styled-components";

function LogoutBt(props) {
  return (
    <Container {...props}>
      <Logout>Logout</Logout>
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

const Logout = styled.span`
  font-family: Open Sans;
  color: rgba(0,0,0,1);
  font-size: 24px;
  font-weight: 700;
  align-self: center;
`;

export default LogoutBt;
