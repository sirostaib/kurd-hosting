import React, { Component } from "react";
import styled, { css } from "styled-components";
import Headerslogin from "../components/headerslogin";
import Property from "./Property";


function Homepage(props) {
  return (
    <>

      <Headerslogin
        style={{
          height: 244,
          width: 1920 }}
          
      ></Headerslogin>
      <Image src={require("../assets/images/asa.png")}></Image>
      <br/>
      <h1 style={{padding: '80px', paddingLeft: "240px"}}>The Latest Properties</h1>
      
      
      <hr/>
      <br/>
     <Property style={{
           height: 282,
           width: 1521,
           marginTop: 100,
           marginLeft: 200,
           marginbottom: 100
         }} />
  
    </>
  );
}

const Image = styled.img`
  width: 2100px;
  height: 652px;
  object-fit: contain;
`;


export default Homepage;
