import { Button } from '@material-ui/core';
import React from 'react'
import {app} from '../base';
import './header.css';

function Header() {
    return (
        <div className="header">
            Welcome Header  
            <Button onClick={() => app.auth().signOut()}>Sign out</Button>
        </div>
    )
}

export default Header
