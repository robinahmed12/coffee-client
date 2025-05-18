import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './coffeeCard';

const Home = () => {
    const data = useLoaderData()

    const [coffees , setCoffees] = useState(data)
    
  
    
    return (
        <>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            {
                data.map(coffee => <CoffeeCard key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                ></CoffeeCard>)
            }
        </div>
        </>
    );
};

export default Home;