import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { app } from '../base';
import { AuthContext } from '../Auth';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import './Login.css';

const Login = ({ history }) => {
    const handleLogin = useCallback (
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    function validateForm() {
        
    }

    return (

        <div className='Login'>
            <form onSubmit={handleLogin}>
                <FormControl>
                    <InputLabel htmlFor='email'>Email Address</InputLabel>
                    <Input id='email' name='email' variant='outlined' aria-describedby='email-helper-text' />
                    <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input id='password' name='password' type='password' variant='outlined' />
                </FormControl>
                <FormControl>
                    <Button color='primary' type='submit'>Login</Button>
                </FormControl>
            </form>
        </div>






        // <div>
        //     <h1>Log In</h1>
        //     <form onSubmit={handleLogin}>
        //         <label>
        //             Email
        //             <input name='email' type='email' placeholder='Email' />
        //         </label>
        //         <label>
        //             Password
        //             <input name='password' type='password' placeholder='Password' />
        //         </label>
        //         <button type='submit'>Log In</button>
        //     </form>
        // </div>
    );
};

export default withRouter(Login);

