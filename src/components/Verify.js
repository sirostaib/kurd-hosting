import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";


export default function Verify() {
    return (
        <div>
            <h1 style={{paddingLeft: "750px", paddingTop: "100px"}}>This is the verification page.</h1>
            <Link to="/Homepage" >
           <Image  src={require("../assets/images/verify.png")} />

          </Link>
        </div>
    )
}


const Image = styled.img`
  width: 600px;
  height: 734px;
  
  margin-left: 690px;
  margin-top: 22px;
  object-fit: cover;
`;