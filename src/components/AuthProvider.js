import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    getAuth,
    signInWithPopup
    } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);

    // create user with email password
    const createUser = (email, password) =>{
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signin with email and password
    const signIn = (email, password) =>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // manage user /
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('observing user:',currentUser);
            setUser(currentUser);
            SetLoading(false);
            // setRefresh(!refresh);
            
        })
        
        return () => unsubscribe();
        
    },[]);

    // Update profile
    const updateUser = (userInfo) =>{
        SetLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

     const providerLogin = (provider) => {
       SetLoading(true);
       return signInWithPopup(auth, provider);
     };

    // signout
    const logOut = () =>{
        SetLoading(true);
        return signOut(auth);
    }

    const authInfo = {
      createUser,
      signIn,
      user,
      updateUser,
      logOut,
      loading,
      providerLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;