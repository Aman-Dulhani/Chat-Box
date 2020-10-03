import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAWVVol2KBDZIeHZY1L1uXP77TnyUfwMnc",
    authDomain: "discord-1b9e4.firebaseapp.com",
    databaseURL: "https://discord-1b9e4.firebaseio.com",
    projectId: "discord-1b9e4",
    storageBucket: "discord-1b9e4.appspot.com",
    messagingSenderId: "813773162853",
    appId: "1:813773162853:web:edb8f75841dd70b464398c",
    measurementId: "G-ET7KWV9VK0"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const db = firebase.database()

