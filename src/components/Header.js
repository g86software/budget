import { Button, Link } from '@material-ui/core';
import React, { useState } from 'react'
import {app} from '../base';
import './header.css';

function Header() {
    
    const [user, setUser] = useState([]);

    app.auth().onAuthStateChanged(user => {
        setUser(user);
      });

    return (
        <div className="header">
            <h1>Personal Budget</h1>
            {
                user ?
                    <Link href='#' onClick={() => app.auth().signOut()}>Sign out</Link>
                :
                    <>Please Login</>
                
            
            }
        </div>
    )
}

export default Header
