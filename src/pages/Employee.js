import React from 'react'
import { useParams } from 'react-router';

function Employee(props) {

    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export default Employee
