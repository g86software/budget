
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'

function Employees() {
    return (
        <div>
            Employees
            <Link component={RouterLink} to="/employees/12">12</Link>
        </div>
    )
}

export default Employees
