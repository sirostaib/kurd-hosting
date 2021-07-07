import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from '../contexts/AuthContext'
import MaterialButtonLight from "./MaterialButtonLight";
import { Link } from "react-router-dom"

import app from "../firebase"

     


function useItems(){

  const [items, setItems] = useState([]);
  

  

useEffect(()=>{
 



     const unsubscribe = app.firestore().collection('account').onSnapshot(snap=>{
         
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

const AllAcc = () => {


  

const items = useItems()



  return (
    <div>
        
        {items.map( (item) => {
          return(
            <div key={item.id}> 

                <h1 style={{paddingLeft: "200px"}}>Account Email: {item.email}</h1>
                <h2 style={{paddingLeft: "200px"}}>Account Full Name: {item.fullName}</h2>
                <br/>
                <hr/>
                <br/>


            </div>
          );
        } )}
        <br />
      </div>
    
  );
}



export default AllAcc;

