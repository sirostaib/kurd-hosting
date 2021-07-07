import React from "react";
import styled, { css } from "styled-components";
import LogoutBt from "./LogoutBt";
import { useAuth } from "../contexts/AuthContext";
import AccountBt from "./accountBt";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory  } from "react-router-dom"


function Header(props) {

  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  const logoutt = () =>{
    logout()
      history.push("/")
  }

  const login = () => {
    var userStatus = true;
    
  
  }
  const userState = useAuth()

  console.log(userState)
  return (
    <Container {...props}>
      <Rect1>
        <LogoRow>
          <Logo style={{marginLeft: "-100px"}}
            src={require("../assets/images/580604f859e84f0c98d76b24522eb8f3.png")}
          ></Logo>
          
          <Home  style={{marginLeft: 0}}> <NavLink to="/Homepage" style={{color: "white"}}>Home</NavLink></Home>
          <Properties> <NavLink to="/Addproperty" style={{color: "white"}}>Post_Property</NavLink></Properties>
          <Contact><NavLink to="/About" style={{color: "white"}}>Contact</NavLink></Contact>
          <About2><NavLink to="/Contact" style={{color: "white"}}>About</NavLink></About2>
          <About2><NavLink to="/Search" style={{color: "white"}}>Search</NavLink></About2>

          {
                      
                      (
                        <>
                        <LogoutBt  style={{
                          height: 76,
                          width: 400,
                          borderRadius: 100,
                          marginLeft: 50,
                          marginTop: 92}} type= "submit" onClick = {logoutt}></LogoutBt>
                          
                          <NavLink to="/update-profile">
                          <AccountBt type="submit" style={{
                            height: 76,
                            width: 200,
                            fontColor: "black",
                            borderRadius: 100,
                            marginLeft: 70,
                            marginTop: 92}} ></AccountBt>
                            </NavLink>
                            </>
                    ) 
                    }

          

          

        </LogoRow>
      </Rect1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect1 = styled.div`
  width: 2100px;
  height: 262px;
  background-color: rgba(77,77,77,1);
  flex-direction: row;
  display: flex;
  align-self: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const Home = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 301px;
  margin-top: 111px;
`;

const Properties = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 50px;
  padding-right: 10px;
  margin-top: 113px;
`;

const Contact = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 43px;
  margin-top: 114px;
`;

const About2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 62px;
  margin-top: 115px;
`;

const LogoRow = styled.div`
  height: 250px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 120px;
  margin-left: 0px;
  margin-top: 6px;
`;

export default Header;
