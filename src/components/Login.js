import React, { useRef, useState } from "react"
import { Button, Alert, NavLink } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom"
import MaterialButtonGrey from "../components/MaterialButtonGrey";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
     
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Homepage")
    } 
    
    catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
     <Container>
     <TextRow>
       <Text>
         <Rect>
           <Welcome>Welcome To Kurd ESTATE</Welcome>
           <Rect3></Rect3>
           <Textbox>
             Kurd&#39;s membership is composed of residential and commercial
             brokers, salespeople, property managers, appraisers, counselors,
             and others engaged in the real estate industry.
           </Textbox>
           <NewUser>New User?</NewUser>

           <Link to="/signup">
           
           <MaterialButtonGrey
             style={{
               height: 76,
               width: 222,
               borderRadius: 100,
               marginTop: 164,
               marginLeft: 103
             }}
           ></MaterialButtonGrey>
           </Link>

         </Rect>
       </Text>
       <Loging>
         <Rect2>
           <Login1>Login</Login1>

           <Email placeholder="   Enter the email" type="email" ref={emailRef} required></Email>
           <Password placeholder="   Enter the password" type="password" ref={passwordRef} required></Password>

           <Button disabled={loading}  style={{
               height: 60,
               width: 220,
               borderRadius: 100,
               marginTop: 152,
               marginLeft: 336
             }}  className=" w-10" type="submit">
             Log In
           </Button>
           <div className="w-100 text-center mt-3">
             <Link to="/forgot-password">Forgot Password?</Link>
           </div>
       
           {error && <Alert variant="danger">{error}</Alert>}
         </Rect2>
       </Loging>
     </TextRow>

  
   </Container>

   </form>
      
    </>
    
  
  )
}

const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   height: 100vh;
   width: 100vw;
 `;

 const Text = styled.div`
   width: 644px;
   height: 850px;
   flex-direction: column;
   display: flex;
   margin-top: 108px;
 `;

 const Rect = styled.div`
   width: 859px;
   height: 944px;
   background-color: rgba(45,45,45,1);
   border-top-left-radius: 100px;
   border-bottom-left-radius: 100px;
   flex-direction: column;
   display: flex;
   margin-top: -108px;
   margin-left: -103px;
 `;

 const Welcome = styled.span`
   font-family: Roboto;
   font-style: normal;
   font-weight: 700;
   color: rgba(255,255,255,1);
   height: 56px;
   width: 496px;
   font-size: 40px;
   margin-top: 108px;
   margin-left: 103px;
 `;

 const Rect3 = styled.div`
   width: 226px;
   height: 2px;
   background-color: #E6E6E6;
   border-width: 1px;
   border-color: rgba(211,211,211,1);
   margin-top: 8px;
   margin-left: 103px;
   border-style: solid;
 `;

 const Textbox = styled.span`
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   color: rgba(255,255,255,1);
   height: 164px;
   width: 644px;
   font-size: 30px;
   margin-top: 58px;
   margin-left: 103px;
 `;

 const NewUser = styled.span`
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   color: rgba(255,255,255,1);
   height: 32px;
   width: 134px;
   font-size: 25px;
   margin-top: 76px;
   margin-left: 103px;
 `;

 const Loging = styled.div`
   width: 892px;
   height: 944px;
   flex-direction: column;
   display: flex;
   margin-left: 112px;
 `;

 const Rect2 = styled.div`
   width: 892px;
   height: 944px;
   background-color: rgba(227,227,227,1);
   border-top-right-radius: 100px;
   border-bottom-right-radius: 100px;
   flex-direction: column;
   display: flex;
 `;

 const Login1 = styled.span`
   font-family: Roboto;
   font-style: normal;
   font-weight: 700;
   color: #121212;
   height: 56px;
   width: 114px;
   font-size: 40px;
   margin-top: 116px;
   margin-left: 389px;
 `;

 const Email = styled.input`
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   color: #121212;
   height: 90px;
   width: 692px;
   font-size: 20px;
   background-color: white;
   border-width: 0px;
   border-color: #000000;
   border-radius: 39px;
   margin-top: 120px;
   margin-left: 100px;
   border-style: solid;
 `;

 const Password = styled.input`
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   color: #121212;
   height: 94px;
   width: 692px;
   line-height: 14px;
   border-radius: 39px;
   background-color: white;
   font-size: 20px;
   margin-top: 90px;
   margin-left: 100px;
   border: none;

 `;

 const TextRow = styled.div`
   height: 944px;
   flex-direction: row;
   display: flex;
   flex: 1 1 0%;
   margin-right: 0px;
   margin-left: 260px;
   margin-top: 30px;
 `;
