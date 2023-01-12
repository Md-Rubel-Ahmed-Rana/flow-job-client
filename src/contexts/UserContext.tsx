import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import app from '../config/firebase.config';


interface User {
    user: any,
    goolgeLogin: () => any,
}

type childrenType = {
    children: React.ReactNode
}

export const AuthContext = createContext({} as User);
const auth = getAuth(app)

const UserContext = ({children}: childrenType) => {
    const [user, setUser] = useState<React.SetStateAction<{}>>({});

    const googleProvider = new GoogleAuthProvider();

    const goolgeLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const LoginUser = result.user
            setUser(() => LoginUser)
        })
        .catch((err) => console.log(err))
    }

    const authInfo = {user, setUser, goolgeLogin}

    // get the currently logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(() => currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;