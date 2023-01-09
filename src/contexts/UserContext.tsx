import React, { createContext, ReactNode, useState } from 'react';

export const AuthContext = createContext({})

const UserContext = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;