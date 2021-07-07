import React, { Component , useState } from "react";
import { fs } from "../firebase";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import RegisterBtn from "../components/RegisterBtn";
import SubmitBtnContact from "../components/SubmitBtnContact";
import {NavLink} from "react-router-dom";



function About(props) {

  const [name1 , setname] = useState("");
  const [email , setemail] = useState("");
  const [message , setmessage] = useState("");

  const [loader , setloader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true);
  
    fs.collection('Contacts').add({
  
      name1: name1,
      email: email,
      message: message,
  
    })
    .then((e) => {
      alert("Message have been set successfuly");
      setloader(false);
    })
    .catch(error => {
      alert(error.Message);
      setloader(false);
    });
  
    setname("");
    setemail("");
    setmessage("");
  
  }


  return (
    <form onSubmit={handleSubmit}>
    <Container>
      <Header
        style={{
          width: 1920,
          height: 262
        }}
      ></Header>
      <ImageStack>
        <Image>

        <NavLink to="/signup">
          <RegisterBtn type="submit"
            style={{
              height: 44,
              width: 157,
              marginTop: 572,
              marginLeft: 423
            }}
          ></RegisterBtn>
          </NavLink>

        </Image>


        <ContactUs>Contact Us</ContactUs>
        <LoremIpsum>
          Kurd&#39;s membership is composed of residential and commercial
          brokers, salespeople, property managers, appraisers, counselors, and
          others engaged in the real estate industry.
        </LoremIpsum>
        <NewUser>New User?</NewUser>

        <Gname>
          <Name>Name</Name>
          <Placeholdername placeholder="Enter your name" value={name1}  onChange={(e) => setname(e.target.value)}></Placeholdername>
        </Gname>

        <GEmail>
          <Email>Email</Email>
          <PlaceholderEmail placeholder="Enter your email address" value={email}  onChange={(e) => setemail(e.target.value)}></PlaceholderEmail>
        </GEmail>
        <GDescription>
          <Message>Message</Message>
          <textarea placeholder="Message" value={message}  onChange={(e) => setmessage(e.target.value)}></textarea>
        </GDescription>
        
        <button className="btn btn-primary w-30 mt-3" type="submit"
          style={{
            background: loader ? "#ccc" : "rbg(2 , 2 ,110)",
            height: 44,
            width: 122,
            position: "absolute",
            left: 1053,
            top: 594
          }}
        > Submit</button>
      </ImageStack>
    </Container>
    </form>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 818px;
  position: absolute;
  opacity: 0.57;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/468608176-0.jpeg")});
  background-size: cover;
`;

const ContactUs = styled.span`
  font-family: Roboto;
  top: 196px;
  left: 423px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 60px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 292px;
  left: 423px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 125px;
  width: 504px;
  font-size: 24px;
`;

const NewUser = styled.span`
  font-family: Roboto;
  top: 521px;
  left: 423px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 17px;
`;

const GEmail = styled.div`
  top: 290px;
  left: 1053px;
  width: 490px;
  height: 94px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Gname = styled.div`
  top: 177px;
  left: 1053px;
  width: 490px;
  height: 94px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Email = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const Name = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const PlaceholderEmail = styled.input`
font-family: Roboto;
font-style: normal;
font-weight: 400;
color: #121212;
height: 63px;
width: 490px;
background-color: rgba(230, 230, 230,1);
border: none;

`;

const Placeholdername = styled.input`
font-family: Roboto;
font-style: normal;
font-weight: 400;
color: #121212;
height: 63px;
width: 490px;
background-color: rgba(230, 230, 230,1);
border: none;

`;

const GDescription = styled.div`
  top: 408px;
  left: 1053px;
  width: 490px;
  height: 180px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Message = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const textarea = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 146px;
  width: 490px;
  background-color: rgba(230, 230, 230,1);
  text-align: left;
  line-height: 14px;
  margin-top: 10px;
  border: none;
`;

const ImageStack = styled.div`
  width: 1946px;
  height: 818px;
  margin-left: -13px;
  position: relative;
`;

export default About;
