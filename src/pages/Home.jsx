import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {
    const data = useLoaderData()

  
    
    return (
        <>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            {
                data.map(coffee => <CoffeeCard key={coffee._id}
                    coffee={coffee}
                ></CoffeeCard>)
            }
        </div>
        </>
    );
};

export default Home;