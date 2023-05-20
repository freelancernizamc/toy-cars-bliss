import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import axios from "axios";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const Categories = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toysData, setToysData] = useState([]);

    useEffect(() => {
        fetchToysData();
    }, []);

    const fetchToysData = async () => {
        try {
            const response = await axios.get("https://assignment-11-server-theta-wheat.vercel.app/toys");
            setToysData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const renderToysByCategory = (category) => {
        const categoryToys = toysData.filter((toy) => toy.category === category);
        const chunks = chunkArray(categoryToys, 3); // Split the array into chunks of size 3

        return chunks.map((chunk, index) => (
            <TabPanel key={index}>
                <div className="flex flex-wrap justify-center">
                    {chunk.map((toy) => (
                        <div key={toy.id} className="flex flex-col items-center m-4">
                            <img
                                src={toy.image}
                                alt={toy.toy_name}
                                className="w-40 h-40 mb-4"
                            />
                            <p className="font-bold text-lg">{toy.toy_name}</p>
                            <p className="text-gray-500">Price: ${toy.price}</p>
                            <p className="text-gray-500">Rating: {toy.rating}</p>
                            <Link to={`/toydetails/${toy._id}`} className="text-white btn bg-[#A1161F] hover:bg-[#45313A]">View Details</Link>

                        </div>
                    ))}
                </div>
            </TabPanel>
        ));
    };

    // Helper function to chunk an array into smaller arrays of a given size
    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    };

    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
                Shop By Categories
            </h2>
            {toysData.length > 0 && (
                <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                    <TabList className="flex justify-center mb-4 bg-[#45313A] text-white">
                        <Tab>Cars</Tab>
                        <Tab>Trucks</Tab>
                        <Tab>Vehicles</Tab>
                    </TabList>
                    {renderToysByCategory("Cars")}
                    {renderToysByCategory("Trucks")}
                    {renderToysByCategory("Vehicles")}
                </Tabs>
            )}
        </div>
    );
};

export default Categories;
