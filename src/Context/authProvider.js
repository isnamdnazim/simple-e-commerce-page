import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const authProvider = ({ children }) => {

    // const { children } = props;

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default authProvider;