import car1 from '../../assets/gallary/policecar.jpg';
import car2 from '../../assets/gallary/firetruck.jpg';
import car3 from '../../assets/gallary/sports.jpg';
import car4 from '../../assets/gallary/truckstoy.jpg';
import car5 from '../../assets/gallary/generaltrias.jpeg';
import car6 from '../../assets/gallary/kidscar.jpg';

const Gallary = () => {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative"></span>
                    </span>{' '}
                    Our Lattest Collection
                </h2>

            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car1} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Mini Police Car</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car2} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Mini Fire Car</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car3} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Sports Car</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car4} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Little Trucks Toy</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car5} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">General Trias</h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-200 h-200 mx-auto mb-4 bg-indigo-50">
                        <img src={car6} alt="gallary" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Kids Toy Car</h6>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/alltoys"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#A1161F] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    See All Toys
                    <span className="ml-1 -mr-2">
                        <svg
                            className="w-8 h-8 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};


export default Gallary;