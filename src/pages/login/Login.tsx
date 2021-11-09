import React, { useEffect, useState } from 'react';
import { GlobalStyle, Wrapper, Form, Input, Button } from './login-styling';
import PropTypes from 'prop-types';
import { UserLogin } from '../../services/user';


export default function Login({ setToken }: any) {

    const [user, setUser] = useState({ email: '', password: '', token: '' });

    useEffect(() => {
        console.log('onLoad');
        setUser({ email: '', password: '', token: '' });
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(user);

        //user.token = '1234';
        //setToken(user);
        await UserLogin(user).then((res) => {
            if (res.data) {
                setToken(user);
            }
        });
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;
        setUser({ email: value, password: user.password, token: '' });
    };

    const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { name, value } = e.target;
        setUser({ email: user.email, password: value, token: '' });
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <h1>Please Log In</h1>
                    <br />
                    <label>
                        <p>Username</p>
                        <Input type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChangeEmail} />
                    </label>
                    <label>
                        <p>Password</p>
                        <Input type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChangePass} />
                    </label>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Wrapper>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}