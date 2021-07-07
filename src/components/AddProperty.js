import React, {useState} from 'react';
import app from '../firebase';
import { Link, useHistory } from "react-router-dom"
import styled, { css } from "styled-components";
import {storage} from "../firebase";
import { useAuth } from '../contexts/AuthContext';
import Header from "./Header";


const AddProperty= () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [owner, setOwner] = useState('')
    const [area, setArea] = useState()

    const [image , setImage] = useState(null)
    const [url1 , setUrl] = useState("");
    const [url2 , setUrll] = useState("");
    const [price, setPrice] = useState()
    const [city, setCity] = useState('')
    const {currentUser} = useAuth()
    const [email, setEmail] = useState(currentUser.email)
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [purpose, setPurpose] = useState('')
    const [phone, setPhone] = useState()
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();



            const handleChange = e => {
              if(e.target.files[0]){
                setImage(e.target.files[0]);
              }
            };


    function onSubmit(e){
        e.preventDefault()

        setPrice(parseInt(price));
        setArea(parseInt( area ))
var testX = [];
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed" , 
           snapshot => {}, 
           error => {
             console.log(error);
           },

           
           () => {
             storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then(url => {
              app.firestore()
        .collection('properties')
        .add({
            email,
            title,
            owner,
            purpose,
            price, 
            date, 
            area, 
            city, 
            phone,
            location,
            description,
            url
           
            //postedBy

        })
        .then( ()=>{
            setTitle('')
            setPrice()
            setOwner('')
            setArea()
            setCity('')
            setLocation('')
            setDescription('')
            setPhone()
            setPurpose('')
            history.push("/Homepage")
        } )
             });
           }
        );

       
/*
        app.firestore()
        .collection('properties')
        .add({
            email,
            title,
            owner,
            purpose,
            price, 
            date, 
            area, 
            city, 
            phone,
            location,
            description,
            url1, 
            url2, 
            testX
            //postedBy

        })
        .then( ()=>{
            setTitle('')
            setPrice()
            setOwner('')
            setArea()
            setCity('')
            setLocation('')
            setDescription('')
            setPhone()
            setPurpose('')
            history.push("/Homepage")
        } )
*/
    }

    console.log("image: ", image);

    return (

        <form onSubmit={onSubmit}>
        
        <Header
        style={{
            height: 244,
            width: 1920
        }}
        ></Header>

        
        <TitleRow>
        <Title>
            <Ttile>Title: </Ttile>
            <PlaceholderTitle type="text" placeholder="Enter the name..." value={title} onChange={e=>setTitle(e.currentTarget.value)}></PlaceholderTitle>
        </Title>
        <Glocations>
            <Locations>Address: </Locations>
            <PlaceholderLocations type="text" placeholder="Ex:. Suli , Erbil ..etc" value={location} onChange={e=>setLocation(e.currentTarget.value)}></PlaceholderLocations>
        </Glocations>
        </TitleRow>

        <GPurposeRow>
        <GPurpose>
            <Purpose>City: </Purpose>
            <PlaceholderPurpose type="text" placeholder="Ex:. Slemani, Hawler..." value={city} onChange={e=>setCity(e.currentTarget.value)} ></PlaceholderPurpose>
        </GPurpose>
        <GOwnerNum>
            <OwnerPhoneNumber>Phone Number</OwnerPhoneNumber>
            <PlaceholderNum type="number" placeholder="Phone Number.." value={phone} onChange={e=>setPhone(e.currentTarget.value)}></PlaceholderNum>
        </GOwnerNum>
        </GPurposeRow>

        <GpriceRow>
        <GArea>
            <AreaInM2>Purpose: </AreaInM2>
            <PlaceholderArea2 type="text" placeholder="Sale or Rent" value={purpose} onChange={e=>setPurpose(e.currentTarget.value)}></PlaceholderArea2>
        </GArea>
        <br /> 
        <Gprice style={{marginLeft: "87px"}}>
            <Price>Price</Price>
            
            <PlaceholderPrice type="number" placeholder="Ex:. $200000" value={price} onChange={e=>setPrice( parseInt( e.currentTarget.value ) )}></PlaceholderPrice>
            
            <button className="btn btn-primary w-30 mt-3" type="submit" style={{
                marginTop: 120
            }}>Post Property</button>
        </Gprice>
        
        
        </GpriceRow>
        

        <GAreaRow>
          
        
        <GArea>
            <AreaInM2 >Area (in Meter)</AreaInM2>
            <PlaceholderArea type="number" placeholder="450" value={area} onChange={e=>setArea( parseInt( e.currentTarget.value ) )}></PlaceholderArea>
            
        </GArea>
        
        <GownerName>
            <PlaceholderNameStack>
            <PlaceholderName type="text" placeholder="Enter the name.." value={owner} onChange={e=>setOwner(e.currentTarget.value)}></PlaceholderName>
            <OwnerFullName>Owner Full Name</OwnerFullName>
            </PlaceholderNameStack>
            
        </GownerName>
        
        </GAreaRow>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <GDescription style={{marginLeft: '130px'}}>
          
            <Description>Description</Description>
            <PlaceholderDescription type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.currentTarget.value)}></PlaceholderDescription>
            
        </GDescription>

        <GDescription2 style={{marginLeft: '1100px'}}>
          
        <Description>Upload Photo: </Description>
          <input type="file" onChange={handleChange}/>

        </GDescription2>

      
       
        </form>

    );
}

const Title = styled.div`
  width: 829px;
  height: 55px;
  flex-direction: column;
  display: flex;
`;

const input = styled.div`

margin-left = 100px;

`;

const button2 = styled.div`
  display: flex;
  background-color: rgba(195,195,195,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 100px;
  padding-left: 16px;
  padding-right: 16px;
`;
const Ttile = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderTitle = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 8px;
  border-style: solid;
  background: transparent;
`;

const Glocations = styled.div`
  width: 801px;
  height: 109px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const Locations = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderLocations = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 61px;
  width: 801px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 11px;
  border-style: solid;
  background: transparent;
`;

const TitleRow = styled.div`
  height: 109px;
  flex-direction: row;
  display: flex;
  margin-top: 36px;
  margin-left: 131px;
  margin-right: 72px;
`;

const GPurpose = styled.div`
  width: 829px;
  height: 48px;
  flex-direction: column;
  display: flex;
`;

const Purpose = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderPurpose = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 74px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 9px;
  border-style: solid;
  background: transparent;
`;

const GOwnerNum = styled.div`
  width: 801px;
  height: 126px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const OwnerPhoneNumber = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 36px;
  width: 345px;
  font-size: 30px;
`;

const PlaceholderNum = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 78px;
  width: 801px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  font-size: 24px;
  margin-top: 12px;
  border-style: solid;
  background: transparent;
`;

const GPurposeRow = styled.div`
  height: 126px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
  margin-left: 131px;
  margin-right: 72px;
`;

const Gprice = styled.div`
  width: 829px;
  height: 119px;
  flex-direction: column;
  display: flex;
`;

const Price = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderPrice = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 200px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 10px;
  border-style: solid;
  background: transparent;
`;

const GDescription = styled.div`
  width: 801px;
  height: 240px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const GDescription2 = styled.div`
  width: 501px;
  height: 140px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
  margin-top: -100px;
`;

const Description = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 44px;
  width: 237px;
  font-size: 30px;
`;

const PlaceholderDescription = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 196px;
  width: 801px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  border-style: solid;
  background: transparent;
`;

const GpriceRow = styled.div`
  height: 240px;
  flex-direction: row;
  display: flex;
  margin-top: 144px;
  margin-left: 131px;
  margin-right: 72px;
`;

const GArea = styled.div`
  width: 829px;
  height: 114px;
  flex-direction: column;
  display: flex;
`;

const AreaInM2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const PlaceholderArea = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-top: 8px;
  border-style: solid;
  background: transparent;
`;
const PlaceholderArea2 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 69px;
  width: 829px;
  font-size: 24px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 8px;
  border-style: solid;
  background: transparent;
`;

const GownerName = styled.div`
  width: 801px;
  height: 114px;
  flex-direction: column;
  display: flex;
  margin-left: 87px;
`;

const PlaceholderName = styled.input`
  font-family: Roboto;
  top: 39px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 75px;
  width: 801px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 10px;
  font-size: 24px;
  border-style: solid;
  background: transparent;
`;

const OwnerFullName = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 51px;
  width: 279px;
  font-size: 30px;
`;

const PlaceholderNameStack = styled.div`
  width: 801px;
  height: 114px;
  position: relative;
`;

const GAreaRow = styled.div`
  height: 114px;
  flex-direction: row;
  display: flex;
  margin-top: -372px;
  margin-left: 131px;
  margin-right: 72px;
`;
const GAreaRow2 = styled.div`
  height: 114px;
  flex-direction: row;
  display: flex;
  margin-top: -372px;
  margin-left: 131px;
  margin-right: 72px;
`;

export default AddProperty
