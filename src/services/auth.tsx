import { useState } from 'react';

export default function useToken() {
    const getTokenDami = () => { return '123'; };
    const getToken = () => {
        const tokenString = localStorage.getItem('token') || '';
        if (!tokenString) {
            return;
        }

        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    //TODO: this is for develop only, change it back to getToken
    const [token, setToken] = useState(getTokenDami());

    const saveToken = (userToken: { token: string; }) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}