import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import sortBy from 'sort-by';

const AllToys = () => {
    const { toys } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState('default');
    const [toysData, setToysData] = useState([]);


    useEffect(() => {
        fetchToysData();
    }, [toys]);

    const fetchToysData = async () => {
        try {
            const response = await axios.get('https://assignment-11-server-theta-wheat.vercel.app/toys');
            setToysData(response.data.slice(0, 20));

        } catch (error) {
            console.log(error);
        }
    };


    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };



    const sortToys = (toys) => {
        switch (sortBy) {
            case 'priceAsc':
                return toys.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceDesc':
                return toys.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            default:
                return toys;
        }
    };

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex items-center space-x-4 mb-4 mt-10">
                <select
                    value={sortBy}
                    onChange={handleSortByChange}
                    className="border rounded-md px-2 py-1 mt-5 font-bold"
                >
                    <option value="default">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                </select>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortToys(toysData).map((toy) => (
                        <tr key={toy._id}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>{toy.seller ? toy.seller : <span className="text-gray-500">N/A</span>}</td>
                            <td>{toy.toy_name}</td>
                            <td>
                                <img className="w-20" src={toy.image} alt="Toy" />
                            </td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.available_quantity}</td>
                            <td>
                                <Link to={`/toydetails/${toy._id}`} className="text-white btn bg-[#A1161F] hover:bg-[#45313A]">
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
