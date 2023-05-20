import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const { toyData } = useContext(AuthContext);

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Toy Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toyData.map((toy) => (
                        <tr key={toy._id}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>{toy.toy_name}</td>
                            <td>
                                <img className="w-20" src={toy.image} alt="Toy" />
                            </td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.available_quantity}</td>
                            <td>{toy.rating}</td>
                            <td>{toy.description}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Update</button>
                            </td>
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

export default MyToys;
