import React, { Component } from "react";
 import styled, { css } from "styled-components";

 function MaterialButtonGrey(props) {
   return (
     <Container {...props}>
       <Register to='/signup'>Register</Register>
     </Container>
   );
 }

 const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   border-radius: 31px;
   min-width: 88px;
   padding-left: 16px;
   padding-right: 16px;
   border-width: 3px;
   border-color: rgba(255,255,255,1);
   border-style: solid;
   box-shadow: 0px 1px 5px  0.35px #000 ;
 `;

 const Register = styled.span`
   font-family: Roboto;
   color: rgba(255,255,255,1);
   font-size: 25px;
   text-align: center;
   font-weight: 700;
 `;

 export default MaterialButtonGrey;