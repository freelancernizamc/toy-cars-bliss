import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const { toys } = useContext(AuthContext);

    return (
        <div>
            {toys.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {toys.map((toy, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                            <img src={toy.pictureUrl} alt={toy.name} className="w-full mb-4 rounded-lg" />
                            <h3 className="text-lg font-bold">{toy.name}</h3>
                            <h3 className="text-lg font-bold">Seller Name: {toy.sellerName}</h3>
                            <p className="text-gray-500">Categories: {toy.category}</p>
                            <p className="text-gray-800 font-bold mt-2">Price: ${toy.price}</p>
                            <p className="text-gray-700 mt-2">Description: {toy.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No toys available.</p>
            )}
        </div>
    );
};

export default MyToys;
