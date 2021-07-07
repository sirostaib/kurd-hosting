import React from 'react'
import app from '../firebase'
import { Link } from "react-router-dom"
import Header from './Header';
import styled from "styled-components";
import MaterialButtonLight from './MaterialButtonLight';







class SearchPrice extends React.Component {

    
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          starting: null,
          ending: null,
          obj: [],
          test: ''
        };
      }

      

     


      handleSubmit(e) {

        e.preventDefault();
       

        let objj = []
  
        app.firestore().collection('properties').where('price', '>=', parseInt( this.state.starting ) ).where('price', '<=', parseInt( this.state.ending ) ).get().then((querySnapshot) => {
        

            console.log("starting: ", this.state.starting)
            console.log("ending: ", this.state.ending)

         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           console.log(doc.data())
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


    
        // are you fucking kidding me!
         
        
    }


    

render(){

    return (
        <div>







<Header
        style={{
          height: 244,
          width: 1920
        }}
      ></Header>

       
            
            <h4 style={{padding: "50px"}}>Search by Price:</h4>
    <form >
           
        <div>

        <Group>
      <Rect2 style={{paddingLeft: "410px"}}>
        <PlaceholderRow>
          <Placeholder placeholder="Starting Price... 10,000" type="text" name="searchBox" id="searchBox" value={this.state.starting} onChange={e=> this.setState({starting: e.target.value})}></Placeholder>
          <To>To</To>
          <Placeholder1 placeholder="Ending Price... 900,000" type="text" name="searchBox" id="searchBox" value={this.state.ending} onChange={e=> this.setState({ending: e.target.value})}></Placeholder1>
         
           <button onClick={this.handleSubmit} style={{borderRadius: "2px", marginLeft: "30px", borderRadius: '75px', paddingLeft: "70px", paddingRight: "70px"}}>Search</button>
          
        </PlaceholderRow>
      </Rect2>
    </Group>

        
        </div>
           
            


        {
    typeof this.state.obj != "undefined" ? 
            
        this.state.obj.map( (item) => {
           return(
                    <div key={item.id}>
                     <br />
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
               <Rect22></Rect22>
               
             </MaterialButtonLightStack>
             <Link to="/MapPage"  style={{paddingLeft: "675px", borderRadius: "2px" , border: "3px", paddingRight: "675px", paddingTop: "15px", paddingBottom: "15px"}}>View Location on Map</Link>
           
           </Container2>
                      
                    </div>  )
                
        }) 
          : 
          (<h5>No Results Yet! Search for a city.</h5> )
        }{
            !this.state.obj.length ? (<h5 style={{paddingLeft: "220px", paddingTop: "70px"}}>No Results Yet! Search for a city.</h5> ) : null
        }
           
        </form>


        <br />
        <hr />
        <br />

        <Link style={{marginLeft: "520px"}} to="/Homepage" className="btn btn-primary w-50 mt-3 center">
            Go Back Home
          </Link>
          
        </div>
    ) }
}



const Group = styled.div`
  display: flex;
  width: 1200px;
  height: 182px;
  flex-direction: column;
  
  align-self: center;
`;

const Rect2 = styled.div`
 
  height: 182px;
  
  flex-direction: row;
  display: flex;
`;

const Placeholder = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 82px;
  width: 322px;
  border-width: 2px;
  border-color: #000000;
  border-radius: 75px;
  shadow-radius: 0px;
  border-style: solid;
  background: transparent;
  box-shadow: 3px 3px 0px  0.19px rgba(0,0,0,1) ;
`;

const To = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  align-self: flex-end;
  margin-left: 39px;
  margin-bottom: 26px;
`;

const Placeholder1 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 79px;
  width: 322px;
  border-width: 2px;
  border-color: #000000;
  border-radius: 75px;
  shadow-radius: 0px;
  margin-left: 37px;
  margin-top: 2px;
  border-style: solid;
  background: transparent;
  box-shadow: 3px 3px 0px  0.19px rgba(0,0,0,1) ;
`;

const Rect3 = styled.div`
  width: 167px;
  height: 77px;
  background-color: #E6E6E6;
  border-radius: 60px;
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  margin-left: 43px;
  margin-top: 3px;
  border-style: solid;
`;

const Search = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: 26px;
  margin-left: 53px;
`;

const PlaceholderRow = styled.div`
  height: 82px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 133px;
  margin-left: 109px;
  margin-top: 51px;
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

const Rect22 = styled.div`
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


export default SearchPrice;
