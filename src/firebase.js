import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'

const app = firebase.initializeApp({

    apiKey: "AIzaSyDMJVVo4PdfAt8gZtS30CuLBNH1Ll2FTKM",
    authDomain: "kurd-estate.firebaseapp.com",
    projectId: "kurd-estate" ,
    storageBucket: "kurd-estate.appspot.com",
    messagingSenderId: "744892733020",
    appId: "1:744892733020:web:93c753ba0798533216b899",
    measurementId: "G-C8RLWQPQB7"

})



export const auth = app.auth()
export const fs = app.firestore()
export const storage = app.storage()
export default app


/*

import app from 'firebase/app';
 
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
 
export default Firebase;

*/