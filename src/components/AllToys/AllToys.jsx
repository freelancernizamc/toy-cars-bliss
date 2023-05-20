import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toysData, setToysData] = useState([]);

    useEffect(() => {
        fetchToysData();
    }, []);

    const fetchToysData = async () => {
        try {
            const response = await fetch("https://assignment-11-server-theta-wheat.vercel.app/toys");
            const data = await response.json();
            setToysData(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toysData.map((toy) => (
                        <tr key={toy.id} toy={toy}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>{toy.seller ? toy.sellerName : <span className="text-gray-500">N/A</span>}</td>
                            <td>{toy.toy_name}</td>
                            <td>
                                <img className="w-20" src={toy.image} alt="Toy" />
                            </td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.available_quantity}</td>
                            <td>
                                <Link to={`/toydetails/${toy.id}`} className="text-white btn bg-[#A1161F] hover:bg-[#45313A]">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
