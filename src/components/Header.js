import { Button, Link } from '@material-ui/core';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
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
                    <>
                        [<Link component={RouterLink} to="/">Home</Link>]&nbsp;
                        [<Link component={RouterLink} to="/employees">Employees</Link>]&nbsp;
                        [<Link href='#' onClick={() => app.auth().signOut()}>Sign out</Link>]
                    </>
                :
                    <>Please Login</>
                
            
            }
        </div>
    )
}

export default Header
