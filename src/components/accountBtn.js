import React  from "react";
import styled from "styled-components";

function accountBtn(props) {
  return (
    <Container {...props}>
      <SingUp>Profile</SingUp>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 100px;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 3px;
  border-color: rgba(255,255,255,1);
  border-style: solid;
`;

const SingUp = styled.span`
  font-family: Open Sans;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: 700;
`;

export default accountBtn;
