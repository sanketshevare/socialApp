import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class Fire {
  constructor() {
    this.init();
    // this.observeAuth();
  }

  // connection to the firebase database, unique credentials from Project Settings>Your apps
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAwpkGgwp2Bs0ePL846wuBNzNfxVJApcaw",
    authDomain: "project-bd9ef.firebaseapp.com",
    databaseURL: "https://project-bd9ef-default-rtdb.firebaseio.com",
    projectId: "project-bd9ef",
    storageBucket: "project-bd9ef.appspot.com",
    messagingSenderId: "822511742003",
    appId: "1:822511742003:web:28aab2ad50afcc6b584746"
      });
    }
  };

//   observeAuth = () =>
//     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

//   // authenticating user and allowing anonymous users
//   onAuthStateChanged = user => {
//     if (!user) {
//       try {
//         firebase.auth().signInAnonymously();
//       } catch ({ message }) {
//         alert(message);
//       }
//     }
//   };

  // getting unique credentials
  get uid() { 
  
    return (firebase.auth().currentUser || {}).uid;
    
  }

  // referencing the 'messages' table in the firebase database
  get ref() {
    return firebase.database().ref('messages');
  }

  // formating the message in order to be displayed nicely
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
      
    };
    return message;
  };

  // getting messages to be displayed from the database
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  // timestamp for the message
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // sending message to be stored in the database
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user} = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
       
        
      };
      this.append(message);
    }
  };

  // appening the message in the chat
  append = message => this.ref.push(message);

  // closing connection
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
