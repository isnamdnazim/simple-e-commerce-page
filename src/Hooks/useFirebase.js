import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log(user)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe if user state change or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        googleSignIn,
        logOut
    }
}

export default useFirebase;