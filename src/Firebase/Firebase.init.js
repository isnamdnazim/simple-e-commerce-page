import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}


export default initializeFirebase;


/* steps for authentication

step 1: initial setup =>{
    1.firebase: create a project
    2.create a webapp in the project
    3.get the configuration
    4.initialize firebase
    5.than enable auth method.
}

step 2: () =>{
    1. create login component
    2. create register component
    3. create route for login
    4. create route for register
}

step 3: () =>{
    1. set up login method
    2. setup signout method
    3. setup useState
    4. setup a special observer by using useEffect on onAuthStateChange from firebase.
}

*/