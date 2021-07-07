import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import Property1 from "../components/Property";
import Map from "../components/Map";

function Homepage(props) {
  return (
    <>
      <Header
        style={{
          height: 244,
          width: 1920
        }}
      ></Header>
      <Image src={require("../assets/images/asa.png")}></Image>
      <h1 style={{marginLeft: '160px', padding: "70px"}}>Latest Posts</h1>
      <hr/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Property1
        style={{
          height: '282px',
          width: '1521px',
          marginTop: '266px',
          margin: '300px',
          paddingLeft: '100px'
        }}
      ></Property1>

      <Map isMarkerShown />
      
    </>
  );
}

const Image = styled.img`
  width: 2100px;
  height: 652px;
  object-fit: contain;
`;

export default Homepage;
