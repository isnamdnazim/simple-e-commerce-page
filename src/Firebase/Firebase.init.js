import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}


export default initializeFirebase;


/* steps for authentication

initial setup =>{
    1.firebase: create a project
    2.create a webapp in the project
    3.get the configuration
    4.initialize firebase
    5.than enable auth method.
}

*/