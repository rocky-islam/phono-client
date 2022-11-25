import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getAuth
    } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user with email password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signin with email and password
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    // manage user /
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('observing user:',currentUser);
            setUser(currentUser);
            
        })
        return unsubscribe();
    },[]);

    // signout
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
      createUser,
      signIn,
      user,
      logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;