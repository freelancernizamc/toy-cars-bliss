import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Categories = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (

        <div>
            <h2 className="text-5xl text-center font-bold mb-10">Shop By Categories</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="text-center">
                <TabList>
                    <Tab>Toy Cars</Tab>
                    <Tab>Toy Track</Tab>
                    <Tab>Sports Car</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;