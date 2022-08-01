import { createContext, useContext, useState, useEffect } from "react";
import { getAuthToken, getNickName } from '../components/utilities/utils';

// Token
export const UserToken = createContext({
    currentToken: null,
    setCurrentToken: () => null
});

export const UserTokenProvider = ({ children }) => {

    const [currentToken, setCurrentToken] = useState(null);
    const value = { currentToken, setCurrentToken };

    const isToken = getAuthToken();
    useEffect(() => {
        setCurrentToken(isToken);
    }, [isToken, setCurrentToken]);

    return <UserToken.Provider value={value}>{children}</UserToken.Provider>
}

export const UserTokenContext = () => {
    return useContext(UserToken)
};




// Nickname
export const UserNickname = createContext({
    currentNickname: null,
    setCurrentNickname: () => null
});

export const UserNicknameProvider = ({ children }) => {
    const [currentNickname, setCurrentNickname] = useState(null);
    const value = { currentNickname, setCurrentNickname }

    const isNickName = getNickName();
    useEffect(() => {
        setCurrentNickname(isNickName);
    }, [isNickName, setCurrentNickname])

    return <UserNickname.Provider value={value}>{children}</UserNickname.Provider>
}

export const UserNicknameContext = () => {
    return useContext(UserNickname)
};