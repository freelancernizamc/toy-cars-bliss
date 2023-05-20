import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toysData, setToysData] = useState([]);
    const [sortBy, setSortBy] = useState('default');
    const [searchQuery, setSearchQuery] = useState('');

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


    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };






    const filterToysBySearchQuery = (toys) => {
        if (searchQuery === '') {
            return toys;
        } else {
            return toys.filter((toy) =>
                toy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                toy.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
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


    const filteredToys = filterToysBySearchQuery(toysData);
    const sortedToys = sortToys(filteredToys);

    return (
        <div className="overflow-x-auto w-full">

            <div className="flex items-center space-x-4 mb-4 mt-10">

                <select value={sortBy} onChange={handleSortByChange} className="border rounded-md px-2 py-1 mt-5 font-bold">
                    <option value="default">Sort By</option>

                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                </select>
            </div>

            <table className="table w-full">
                {/* Table body */}
                <tbody>
                    {sortedToys.map((toy) => (
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
                                <Link to={`/toydetails/${toy.id}`} className="text-white btn bg-[#A1161F] hover:bg-[#45313A]">
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
