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
            const response = await fetch(`https://assignment-11-server-theta-wheat.vercel.app/toys/${toyId}`);
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
            <h2>Toy Details</h2>
            <p>Toy ID: {toyData._id}</p>
            <p>Name: {toyData.toy_name}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ToyDetails;
