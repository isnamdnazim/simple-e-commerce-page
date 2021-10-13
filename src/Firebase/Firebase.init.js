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

*/