import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, NavLink } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "../firebase"
import MaterialButtonGrey1 from "../components/MaterialButtonGrey1";
import styled, { css } from "styled-components";



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  //const [email, setEmail] = useState('')
  //const [fullName, setFullName] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      app.firestore().collection('account').add({
        email: emailRef.current.value ,
        fullName: nameRef.current.value
        
      })  
      history.push("/Verify")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}> 
    <Container style={{marginLeft: "-103px"}}>
    <Text1Row>
      <Text1>
        <Rect>
          <Welcom>Welcome To Kurd ESTATE</Welcom>
          <Rect3></Rect3>
          <Text>
            Kurd&#39;s membership is composed of residential and commercial
            brokers, salespeople, property managers, appraisers, counselors,
            and others engaged in the real estate industry.
          </Text>
          <Link to="/login">
          <MaterialButtonGrey1
            style={{
              height: 56,
              width: 214,
              borderRadius: 100,
              marginTop: 294,
              marginLeft: 164
            }}
          ></MaterialButtonGrey1>
          </Link>
        </Rect>
      </Text1>
      <RegistartionG>
        <Rect2>
          <Title>Registration</Title>
          <FullName placeholder="   Full name" type="text" ref={nameRef} required></FullName>
          <Email placeholder="   Entre the email" type="email" ref={emailRef} required></Email>
          <PasswordRow>
            <Password placeholder="   Password" type="password" ref={passwordRef} required></Password>
            <VerifyPassword placeholder="   Verify Password" type="password" ref={passwordConfirmRef} required></VerifyPassword>
          </PasswordRow>
          <Button disabled={loading} className="w-10" style={{
              height: 60,
              width: 220,
              borderRadius: 100,
              marginTop: 100,
              marginLeft: 500}}
               type="submit">
            Sign Up
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
        </Rect2>
      </RegistartionG>
    </Text1Row>
  </Container>
  </form>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const Text1 = styled.div`
  width: 535px;
  height: 930px;
  flex-direction: column;
  display: flex;
  margin-top: 66px;
`;

const Rect = styled.div`
  width: 598px;
  height: 968px;
  background-color: rgba(51,51,51,1);
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  flex-direction: column;
  display: flex;
  margin-top: -66px;
  margin-left: -63px;
`;

const Welcom = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 56px;
  width: 482px;
  font-size: 40px;
  margin-top: 82px;
  margin-left: 51px;
`;

const Rect3 = styled.div`
  width: 220px;
  height: 2px;
  background-color: #E6E6E6;
  border-width: 1px;
  border-color: rgba(211,211,211,1);
  margin-top: 8px;
  margin-left: 51px;
  border-style: solid;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 194px;
  width: 482px;
  font-size: 30px;
  margin-top: 58px;
  margin-left: 51px;
`;

const RegistartionG = styled.div`
  width: 1182px;
  height: 968px;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 1182px;
  height: 968px;
  background-color: #E6E6E6;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 50px;
  text-align: center;
  margin-top: 66px;
`;

const FullName = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  margin-top: 121px;
  margin-left: 55px;
  border: none;
 
`;

const Email = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 92px;
  width: 536px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  margin-top: 62px;
  margin-left: 55px;
  border: none;

`;

const Password = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  background-color: rgba(255,255,255,1);
  border-radius: 100px;
  font-size: 20px;
  border: none;

`;

const VerifyPassword = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 102px;
  width: 536px;
  border-radius: 100px;
  font-size: 20px;
  background-color: rgba(255,255,255,1);
  margin-left: 20px;
  border: none;
  
`;

const PasswordRow = styled.div`
  height: 102px;
  flex-direction: row;
  display: flex;
  margin-top: 90px;
  margin-left: 55px;
  margin-right: 35px;
`;

const Text1Row = styled.div`
  height: 968px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 85px;
  margin-left: 238px;
  margin-top: 56px;
`;
