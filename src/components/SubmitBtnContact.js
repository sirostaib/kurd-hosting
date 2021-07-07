import React  from "react";
import styled from "styled-components";

function SubmitBtnContact(props) {
  return (
    <Container {...props}>
      <Submit>Submit</Submit>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(226,227,228,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 100px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Submit = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 17px;
  font-weight: 500;
`;

export default SubmitBtnContact;
