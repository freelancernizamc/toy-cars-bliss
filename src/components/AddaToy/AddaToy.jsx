import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';


const AddaToy = () => {

    const { toys, setToys, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        category: '',
        price: '',
        rating: '',
        availableQuantity: '',
        description: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setToyData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://assignment-11-server-theta-wheat.vercel.app/api/toys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(toyData),
            });

            if (response.ok) {
                const newToyData = {
                    pictureUrl: '',
                    name: '',
                    sellerName: '',
                    sellerEmail: '',
                    category: '',
                    price: '',
                    rating: '',
                    availableQuantity: '',
                    description: '',
                };

                setToys([...toys, toyData]);
                setToyData(newToyData);

                navigate('/mytoys');
            } else {
                console.error('Error saving the toy');
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add A Toy</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block">
                            Picture URL:
                            <input
                                type="text"
                                name="pictureUrl"
                                value={toyData.pictureUrl}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={toyData.name}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Seller Name:
                            <input
                                type="text"
                                name="sellerName"
                                value={toyData.sellerName}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Seller Email:
                            <input
                                type="email"
                                name="sellerEmail"
                                value={toyData.sellerEmail}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            Category:
                            <input
                                type="text"
                                name="category"
                                value={toyData.category}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Price:
                            <input
                                type="text"
                                name="price"
                                value={toyData.price}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Rating:
                            <input
                                type="text"
                                name="rating"
                                value={toyData.rating}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                        <label className="block">
                            Available Quantity:
                            <input
                                type="text"
                                name="availableQuantity"
                                value={toyData.availableQuantity}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                        </label>
                    </div>
                </div>
                <label className="block">
                    Detail Description:
                    <textarea
                        name="description"
                        value={toyData.description}
                        onChange={handleChange}
                        className="border rounded-md px-2 py-1 w-full"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Add Toy
                </button>
            </form>
        </div>
    );
};

export default AddaToy;
