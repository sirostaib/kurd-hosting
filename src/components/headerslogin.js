import React, { Component, setState } from "react";
import styled, { css } from "styled-components";
import LoginBt from "./LoginBt";
import { useSelector } from 'react-redux' 
import SingupBt from "./SingupBt";
import userStatus from '../redux/actions/user'
import { useAuth } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect, useHistory  } from "react-router-dom"


function Header(props) {

  const { currentUser, logout } = useAuth();
  const history = useHistory();
  
  const logoutt = () =>{
    logout()
      history.push("/")
  }
  const login = () => {
    var userStatus = true
  }
  const userState = useAuth()

  console.log(userState)
  return (
    <Container {...props}>
      <Rect1>
        <LogoRow>
          <Logo style={{marginRight: "900px"}}
            src={require("../assets/images/580604f859e84f0c98d76b24522eb8f3.png")}
          ></Logo>
          
         

          {userState ? 
                      
                      (
                        <>
                        <NavLink to = "/Login">
                        <LoginBt 
                          style={{
                            height: 76,
                            width: 200,
                            borderRadius: 100,
                            marginLeft: 50,
                            marginTop: 92
                          }} onClick = {login}
                        ></LoginBt>
                        </NavLink>
                        
                        <NavLink to="/signup">
                      <SingupBt
                        style={{
                          height: 76,
                          width: 200,
                          borderRadius: 100,
                          marginLeft: 70,
                          marginTop: 92
                        }}
                      ></SingupBt>
                      </NavLink>
                             </>
                    ) : (""
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
  height: 255px;
  background-color: rgba(77,77,77,1);
  flex-direction: row;
  display: flex;
  align-self: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;


const LogoRow = styled.div`
  height: 250px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 120px;
  margin-left: 86px;
  margin-top: 6px;
`;

export default Header;
