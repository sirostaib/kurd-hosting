import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import SubmitAdd from "../components/SubmitAdd";

function Addproperty(props) {
  return (
    <>
      <Header
        style={{
          height: 244,
          width: 1920
        }}
      ></Header>
      <TitleRow>
        <Title>
          <Ttile>Ttile</Ttile>
          <PlaceholderTitle placeholder="Enter the name..."></PlaceholderTitle>
        </Title>
        <Glocations>
          <Locations>Locations</Locations>
          <PlaceholderLocations placeholder="Ex:. Suli , Erbil ..etc"></PlaceholderLocations>
        </Glocations>
      </TitleRow>
      <GPurposeRow>
        <GPurpose>
          <Purpose>Purpose</Purpose>
          <PlaceholderPurpose placeholder="Ex:. sell , rent"></PlaceholderPurpose>
        </GPurpose>
        <GOwnerNum>
          <OwnerPhoneNumber>Owner Phone Number</OwnerPhoneNumber>
          <PlaceholderNum placeholder="Phone Number.."></PlaceholderNum>
        </GOwnerNum>
      </GPurposeRow>
      <GpriceRow>
        <Gprice>
          <Price>Price</Price>
          <PlaceholderPrice placeholder="placeholder"></PlaceholderPrice>
        </Gprice>
        <GDescription>
          <Description>Description</Description>
          <PlaceholderDescription placeholder="Description"></PlaceholderDescription>
        </GDescription>
      </GpriceRow>
      <GAreaRow>
        <GArea>
          <AreaInM2>Area (in M2)</AreaInM2>
          <PlaceholderArea placeholder="1234"></PlaceholderArea>
        </GArea>
        <GownerName>
          <PlaceholderNameStack>
            <PlaceholderName placeholder="Enter the name.."></PlaceholderName>
            <OwnerFullName>Owner Full Name</OwnerFullName>
          </PlaceholderNameStack>
        </GownerName>
      </GAreaRow>
      <SubmitAdd
        style={{
          height: 76,
          width: 234,
          marginTop: 258,
          marginLeft: 131
        }}
      ></SubmitAdd>
    </>
  );
}

const Title = styled.div`
  width: 829px;
  height: 55px;
  flex-direction: column;
  display: flex;
`;

const Ttile = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderTitle = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 8px;
  border-style: solid;
  background: transparent;
`;

const Glocations = styled.div`
  width: 801px;
  height: 109px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const Locations = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderLocations = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 61px;
  width: 801px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 11px;
  border-style: solid;
  background: transparent;
`;

const TitleRow = styled.div`
  height: 109px;
  flex-direction: row;
  display: flex;
  margin-top: 36px;
  margin-left: 131px;
  margin-right: 72px;
`;

const GPurpose = styled.div`
  width: 829px;
  height: 48px;
  flex-direction: column;
  display: flex;
`;

const Purpose = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderPurpose = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 74px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 9px;
  border-style: solid;
  background: transparent;
`;

const GOwnerNum = styled.div`
  width: 801px;
  height: 126px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const OwnerPhoneNumber = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 36px;
  width: 345px;
  font-size: 30px;
`;

const PlaceholderNum = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 78px;
  width: 801px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  font-size: 24px;
  margin-top: 12px;
  border-style: solid;
  background: transparent;
`;

const GPurposeRow = styled.div`
  height: 126px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-left: 131px;
  margin-right: 72px;
`;

const Gprice = styled.div`
  width: 829px;
  height: 119px;
  flex-direction: column;
  display: flex;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderPrice = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 72px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 10px;
  border-style: solid;
  background: transparent;
`;

const GDescription = styled.div`
  width: 801px;
  height: 240px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 44px;
  width: 237px;
  font-size: 30px;
`;

const PlaceholderDescription = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 196px;
  width: 801px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  border-style: solid;
  background: transparent;
`;

const GpriceRow = styled.div`
  height: 240px;
  flex-direction: row;
  display: flex;
  margin-top: 144px;
  margin-left: 131px;
  margin-right: 72px;
`;

const GArea = styled.div`
  width: 829px;
  height: 114px;
  flex-direction: column;
  display: flex;
`;

const AreaInM2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderArea = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 8px;
  border-style: solid;
  background: transparent;
`;

const GownerName = styled.div`
  width: 801px;
  height: 114px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const PlaceholderName = styled.input`
  font-family: Roboto;
  top: 39px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 75px;
  width: 801px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  font-size: 24px;
  border-style: solid;
  background: transparent;
`;

const OwnerFullName = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 51px;
  width: 279px;
  font-size: 30px;
`;

const PlaceholderNameStack = styled.div`
  width: 801px;
  height: 114px;
  position: relative;
`;

const GAreaRow = styled.div`
  height: 114px;
  flex-direction: row;
  display: flex;
  margin-top: -372px;
  margin-left: 131px;
  margin-right: 72px;
`;

export default Addproperty;
