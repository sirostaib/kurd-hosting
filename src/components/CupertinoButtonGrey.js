import React, { Component } from "react";
 import styled, { css } from "styled-components";

 function CupertinoButtonGrey(props) {
   return (
     <Container {...props}>
       <Search>Search</Search>
     </Container>
   );
 }

 const Container = styled.div`
   display: flex;
   background-color: #8E8E93;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   border-radius: 5px;
   padding-left: 16px;
   padding-right: 16px;
 `;

 const Search = styled.span`
   font-family: Roboto;
   color: black;
   font-size: 30px;
   font-weight: 700;
 `;

 export default CupertinoButtonGrey;