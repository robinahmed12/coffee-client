import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    
    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default Details;