import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from '../contexts/AuthContext'
import MaterialButtonLight from "./MaterialButtonLight";
import { Link } from "react-router-dom"

import app from "../firebase"

     


function useItems(){

  const [items, setItems] = useState([]);
  

  

useEffect(()=>{
 



     const unsubscribe = app.firestore().collection('properties').orderBy('date', 'desc').onSnapshot(snap=>{
         
       const fetched = snap.docs.map(doc=>({
            
               ... doc.data(), 
               id: doc.id
         }))

         
         console.log(fetched);
         setItems( fetched );
        

     });


    
    
         return unsubscribe
}, []);

return items;
}

const AllProp = () => {


  

const items = useItems()



  return (
    <div>
        
        {items.map( (item) => {
          return(
            <div key={item.id}> 
           <Container >
            <MaterialButtonLightStack>
              <MaterialButtonLight
                style={{
                  height: 282,
                  width: 1516,
                  position: "absolute",
                  left: 6,
                  top: 0,
                  boxShadow: "0px 0px 15px  0.1px rgba(0,0,0,1) "
                }}
              ></MaterialButtonLight>
              <Information>
                <div key={item.id}>
                <TitleStack>
                  <Title>{item.title}</Title>
                  
                  <City><strong>City: </strong>{item.city}</City>
                </TitleStack>

                <AddressColumnRow>
                  <AddressColumn>
                    <Address><strong>Address: </strong>{item.location}</Address>
                    <Description>{item.description}</Description>
                  </AddressColumn>
                  <Price>${item.price}</Price>
                </AddressColumnRow>

                <OwnerFullNameColumnRow>
                  <OwnerFullNameColumn>
                    <OwnerFullName>Owner: {item.owner}</OwnerFullName>
                    <Email>Email: {item.email}</Email>
                  </OwnerFullNameColumn>
                  <PhoneNumberStack>
                    <PhoneNumber>Phone: {item.phone}</PhoneNumber>
                    <Area>Area: {item.area} meters</Area>
                  </PhoneNumberStack>
                  <PurposeColumn>
                    <Purpose>Purpose: {item.purpose}</Purpose>
                    <Date>Date: {item.date}</Date>
                  </PurposeColumn>
                </OwnerFullNameColumnRow>
                </div>
              </Information>
              <Image3 src={item.url}></Image3>
              <Rect2></Rect2>
              
            </MaterialButtonLightStack>
            <Link to="/MapPage"  style={{paddingLeft: "675px", borderRadius: "2px" , border: "3px", paddingRight: "675px", paddingTop: "15px", paddingBottom: "15px"}}>View Location on Map</Link>
                
          </Container>
          </div>
          );
        } )}
        <br />
      </div>
    
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
  margin-bottom: 60px;

`;

const Information = styled.div`
  top: 10px;
  left: 396px;
  width: 1088px;
  height: 62px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 50px;
  width: 1088px;
  height: 62px;
`;

const City = styled.span`
  font-family: Roboto;
  top: 60px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 31px;
  width: 359px;
  font-size: 20px;
`;

const TitleStack = styled.div`
  width: 1088px;
  height: 75px;
  position: relative;
`;

const Address = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 37px;
  width: 428px;
  font-size: 20px;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 855px;
  font-size: 12px;
`;

const AddressColumn = styled.div`
  width: 855px;
  flex-direction: column;
  display: flex;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 63px;
  width: 219px;
  font-size: 50px;
  margin-left: 14px;
  margin-top: 6px;
`;

const AddressColumnRow = styled.div`
  height: 106px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
`;

const OwnerFullName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 30px;
  width: 393px;
  font-size: 20px;
`;

const Email = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 24px;
  width: 338px;
  font-size: 20px;
`;

const OwnerFullNameColumn = styled.div`
  width: 393px;
  flex-direction: column;
  display: flex;
  margin-bottom: 7px;
`;

const PhoneNumber = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 32px;
  width: 312px;
  font-size: 20px;
`;

const Area = styled.span`
  font-family: Roboto;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
  left: 0px;
  top: 31px;
  text-align: left;
  width: 183px;
  height: 24px;
`;

const PhoneNumberStack = styled.div`
  width: 312px;
  height: 55px;
  margin-left: 6px;
  margin-top: 1px;
  position: relative;
`;

const Purpose = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 27px;
  width: 351px;
  font-size: 20px;
`;

const Date = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 29px;
  width: 351px;
  font-size: 20px;
  margin-top: 3px;
`;

const PurposeColumn = styled.div`
  width: 351px;
  flex-direction: column;
  display: flex;
  margin-left: 26px;
  margin-top: 2px;
`;

const OwnerFullNameColumnRow = styled.div`
  height: 61px;
  flex-direction: row;
  display: flex;
  margin-top: 7px;
`;

const Image3 = styled.img`
  top: 0px;
  left: 0px;
  width: 396px;
  height: 282px;
  position: absolute;
  object-fit: contain;
`;

const Rect2 = styled.div`
  top: 202px;
  left: 396px;
  width: 1088px;
  height: 4px;
  position: absolute;
  background-color: rgba(77,77,77,1);
`;

const MaterialButtonLightStack = styled.div`
  width: 1522px;
  height: 282px;
  position: relative;
`;




export default AllProp;

