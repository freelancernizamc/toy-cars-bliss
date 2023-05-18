import Banner from "../Banner";
import Categories from "../Categories";
import Contact from "../Contact";
import Gallary from "../Gallary";
import Testimonial from "../Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Gallary />
            <Categories />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;