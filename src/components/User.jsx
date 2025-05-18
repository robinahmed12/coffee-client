import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const data = useLoaderData()
    console.log(data);
    
    
    
    return (
        <div>
            <h1>users</h1>

            {
                data.map( u => <p>
                    {u.email}
                </p>)
            }
        </div>
    );
};

export default User;