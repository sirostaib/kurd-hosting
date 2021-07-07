import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

function Contact(props) {
  return (
    <>
      <Header
        style={{
          width: 1920,
          height: 262
        }}
      ></Header>
      <EllipseStackRow>
        <EllipseStack>
          <svg
            viewBox="0 0 100 100"
            style={{
              left: 268,
              width: 332,
              height: 337,
              position: "absolute",
              top: 0
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(60,60,60,1)"
              cx={50}
              cy={50}
              rx={50}
              ry={50}
            ></ellipse>
          </svg>
          <KurdEstate>Kurd Estate</KurdEstate>
          <LoremIpsum>
            Kurd&#39;s membership is composed of residential and commercial
            brokers, salespeople, property managers, appraisers, counselors, and
            others engaged in the real estate industry.
          </LoremIpsum>
        </EllipseStack>
        <Image
          src={require("../assets/images/c5e02fce-c0d2-0d86-c803-4283c6a5fc9f.jpg")}
        ></Image>
      </EllipseStackRow>
    </>
  );
}

const KurdEstate = styled.span`
  font-family: Roboto;
  top: 204px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 70px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 303px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 143px;
  width: 652px;
  font-size: 24px;
`;

const EllipseStack = styled.div`
  width: 652px;
  height: 446px;
  position: relative;
`;

const Image = styled.img`
  width: 600px;
  height: 534px;
  border-radius: 300px;
  margin-left: 80px;
  margin-top: 22px;
  object-fit: cover;
`;

const EllipseStackRow = styled.div`
  height: 556px;
  flex-direction: row;
  display: flex;
  margin-top: 110px;
  margin-left: 308px;
  margin-right: 368px;
`;

export default Contact;
