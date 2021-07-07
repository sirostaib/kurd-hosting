import React, {useEffect} from 'react'
import app from '../firebase'
import Header from "../components/Header";
import styled, { css } from "styled-components";
import { Link, useHistory } from "react-router-dom"
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import MaterialButtonLight from './MaterialButtonLight';



class Search extends React.Component {

    
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          city: '',
          obj: [],
          test: ''
        };
      }


      handleSubmit(e) {

        e.preventDefault();
       

        let objj = []
  
        app.firestore().collection('properties').where('city', '==', this.state.city).get().then((querySnapshot) => {
        
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           
            objj.push( {
                id: doc.id,
                ...doc.data()
            })
            
        });
        
        this.setState({ obj: objj },  ()=> {
            console.log(this.state.obj);
           
          });
          this.setState({test: "done"})

    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });


    
    
         
        
    }


    

render(){

    return (
        <div>
            <Header
        style={{
          width: 2100,
          height: 262
        }}
      ></Header>
            <br/>

            <br/>
    <form >
           

    
       <SearchBarRow>
         <SearchBar>
           <Rect>
             <IconRow>
               <EvilIconsIcon
                 name="search"
                 style={{
                   color: "rgba(128,128,128,1)",
                   fontSize: 69,
                   height: 75,
                   width: 69
                 }}
               ></EvilIconsIcon>
               <Inputtext placeholder="Enter the city here...."type="text" name="searchBox" id="searchBox" value={this.state.city} onChange={e=> this.setState({city: e.target.value})}></Inputtext>
             </IconRow>
           </Rect>
         </SearchBar>
         <CupertinoButtonGrey type="submit" onClick={this.handleSubmit}
           style={{
             height: 94,
             width: 202,
             backgroundColor: "rgba(54,54,54,1)",
             color: "black",
             borderRadius: 100,
             marginLeft: 88,
             marginTop: 21,
             boxShadow: "3px 3px 20px  0.03px rgba(0,0,0,1) "
           }}
         ></CupertinoButtonGrey>
       </SearchBarRow>
       
     <br/>
     <br/>
     <br/>
     <br/>


        {
    typeof this.state.obj != "undefined" ? 
            
        this.state.obj.map( (item) => {
           return(
            <div key={item.id}> 
            <Container2 >
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
           
           </Container2>
             
           </div>
                     )
                
        }) 
          : 
          (<h5 style={{paddingLeft: "60px"}}>.   No Results Yet! Searchh for a city.</h5> )
        }{
            !this.state.obj.length ? (<h5 style={{paddingLeft: "200px", margin: "10px"}}>No Results Yet! Search for a city.</h5> ) : null
        }
           
        </form>


        <br />
        <hr />
        <br />


        <Link to="/SearchPrice" style={{marginLeft: "500px"}} className="btn btn-primary w-50 mt-3 center">
            Search By Price
          </Link>
          <br />
          <Link to="/SearchArea" style={{marginLeft: "500px"}} className="btn btn-primary w-50 mt-3 center">
            Search By Area
          </Link>
          <br />
        <Link to="/Homepage" style={{marginLeft: "500px"}} className="btn btn-primary w-50 mt-3 center">
            Go Back Home
          </Link>
          
          

          
        </div>
    ) }
}




 const SearchBar = styled.div`
   width: 1324px;
   height: 132px;
   flex-direction: column;
   display: flex;
 `;

 const Rect = styled.div`
   width: 1324px;
   height: 132px;
   background-color: rgba(255,255,255,1);
   border-radius: 100px;
   flex-direction: row;
   display: flex;
   box-shadow: 3px 3px 20px  0.02px rgba(0,0,0,1) ;
 `;

 const Inputtext = styled.input`
   font-family: Roboto;
   font-style: normal;
   font-weight: 400;
   color: #121212;
   height: 75px;
   width: 1166px;
   font-size: 25px;
   margin-left: 13px;
   border: none;
   background: transparent;
 `;

 const IconRow = styled.div`
   height: 75px;
   flex-direction: row;
   display: flex;
   flex: 1 1 0%;
   margin-right: 64px;
   margin-left: 12px;
   margin-top: 29px;
 `;

 const SearchBarRow = styled.div`
   height: 132px;
   flex-direction: row;
   display: flex;
   margin-top: 38px;
   margin-left: 160px;
   margin-right: 146px;
 `;


 const Container2 = styled.div`
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


export default Search;
