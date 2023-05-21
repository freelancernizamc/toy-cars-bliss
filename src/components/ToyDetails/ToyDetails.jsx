import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { toyId } = useParams();
    const [toyData, setToyData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchToyDetails();
    }, []);

    const fetchToyDetails = async () => {
        try {
            const response = await fetch(`https://assignment-11-server-theta-wheat.vercel.app/toy/${toyId}`);
            if (response.ok) {
                const data = await response.json();
                setToyData(data);
                setLoading(false);
            } else {
                setLoading(false);
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading toy details...</div>;
    }

    if (!toyData) {
        return <div>Toy not found.</div>;
    }

    return (
        <div>
            <h2 className='text-5xl text-center font-bold my-10'>Toy Details</h2>
            <div className='md:flex items-center justify-between'>
                <div className='w-1/2 ml-20'>
                    <img src={toyData.image} alt='toy' />
                </div>
                <div className='w-1/2'>
                    <p className='text-3xl font-bold'>Name: {toyData.toy_name}</p>
                    <p className='text-xl font-bold'>Category: {toyData.category}</p>
                    <p className='text-xl font-bold'>Seller Name: {toyData.seller}</p>
                    <p className='text-xl font-bold'>Seller Email: {toyData.email}</p>
                    <p className='text-xl font-bold'>Price: {toyData.price}</p>
                    <p className='text-xl font-bold'>Rating: {toyData.rating}</p>
                    <p className='text-xl font-bold mb-3'>Available Quantity: {toyData.available_quantity}</p>
                    <p className='text-xl mb-5'>Description: {toyData.description}</p>

                </div>
            </div>



        </div>
    );
};

export default ToyDetails;
