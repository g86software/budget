import React, { useCallback } from 'react'
import { withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Button, FormControl, FormHelperText, Input, InputLabel, Link } from '@material-ui/core';
import { app } from '../base';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert (error);
        }
    }, [history]);

    return (
        <div className='SignUp'>
            <form onSubmit={handleSignUp}>
            <FormControl>
                    <InputLabel htmlFor='email'>Email Address</InputLabel>
                    <Input id='email' name='email' variant='outlined' aria-describedby='email-helper-text' />
                    <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input id='password' name='password' type='password' variant='outlined' />
                </FormControl>
                <FormControl style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Button style={{width: '50%'}} color='primary' type='submit'>Sign Up</Button>
                    <Button style={{width: '50%'}} color='primary' component={RouterLink} to='/Login'>Login</Button>
                </FormControl>
            </form>
        </div>

    )
}

export default withRouter(SignUp);