import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const { user, toyData, setToyData } = useContext(AuthContext);
    const url = `https://assignment-11-server-theta-wheat.vercel.app/uploads?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(toyData => {
                setToyData(toyData);
            })
            .catch(error => {
                console.error('Error fetching toy data:', error);
            });
    }, [url, setToyData]);

    if (!toyData) {
        return <div>Loading...</div>;
    }

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete it?');
        if (proceed) {
            fetch(`https://assignment-11-server-theta-wheat.vercel.app/api/toys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // if (data.deletedCount > 0) {
                    alert('Toy deleted successfully');
                    const remaining = toyData.filter(d => d._id !== id);
                    setToyData(remaining);
                    // }
                })
                .catch(error => {
                    console.error('Error deleting toy:', error);
                });
        }
    };



    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Toy Name</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Quantity</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {toyData.length > 0 ? (
                        toyData.map((toy) => (
                            <tr key={toy._id}>
                                <td className="px-4 py-2">{toy.toy_name}</td>
                                <td className="px-4 py-2">
                                    <img className="w-16 h-16" src={toy.image} alt="Toy" />
                                </td>
                                <td className="px-4 py-2">{toy.category}</td>
                                <td className="px-4 py-2">{toy.price}</td>
                                <td className="px-4 py-2">{toy.available_quantity}</td>
                                <td className="px-4 py-2">{toy.rating}</td>
                                <td className="px-4 py-2">{toy.description}</td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleDelete(toy._id)} className="btn">Delete</button>
                                </td>
                                <td className="px-4 py-2">
                                    <button className="btn">Update</button>
                                </td>
                                <td className="px-4 py-2">
                                    <Link
                                        to={`/toydetails/${toy._id}`}
                                        className="text-white btn bg-[#A1161F] hover:bg-[#45313A]"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="px-4 py-2" colSpan="10">No toy data available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;