import React from "react";
import styled from "styled-components";

function SubmitAdd(props) {
  return (
    <Container {...props}>
      <Submit type="submit">Submit</Submit>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(195,195,195,1);
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
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
`;

export default SubmitAdd;
