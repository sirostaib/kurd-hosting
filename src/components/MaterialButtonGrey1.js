import React, { Component } from "react";
 import styled, { css } from "styled-components";

 function MaterialButtonGrey1(props) {
   return (
     <Container {...props}>
       <Login>Login</Login>
     </Container>
   );
 }

 const Container = styled.div`
   display: flex;
   background-color: #999999;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   border-radius: 2px;
   min-width: 88px;
   padding-left: 16px;
   padding-right: 16px;
   box-shadow: 0px 1px 5px  0.35px #000 ;
 `;

 const Login = styled.span`
   font-family: Roboto;
   color: rgba(0,0,0,1);
   font-size: 25px;
   font-weight: 700;
 `;

 export default MaterialButtonGrey1;