const Contact = () => {
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <style>
                        {`
              .map-container {
                height: 700px;
                z-index: -1;
              }
              `}
                    </style>
                    <div className="px-6 py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                        style={{
                                            background: "hsla(0, 0%, 100%, 0.55)",
                                            backdropFilter: "blur(30px)",
                                        }}
                                    >
                                        <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                                        <form>
                                            <div className="form-group mb-6">
                                                <input
                                                    type="text"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleInput7"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="form-group mb-6">
                                                <input
                                                    type="email"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleInput8"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div className="form-group mb-6">
                                                <textarea
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlTextarea13"
                                                    rows="3"
                                                    placeholder="Message"
                                                ></textarea>
                                            </div>
                                            <div className="form-group form-check text-center mb-6">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                                    id="exampleCheck87"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label inline-block text-gray-800"
                                                    htmlFor="exampleCheck87"
                                                >
                                                    Send me a copy of this message
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full px-6 py-2.5 bg-[#8E131E] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <div className="map-container relative shadow-lg rounded-lg">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59033.14882743237!2d91.77639792519199!3d22.36979156083928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spanslaish!5e0!3m2!1sen!2sbd!4v1684412925891!5m2!1sen!2sbd"
                                            className="left-0 top-0 h-full w-full absolute rounded-lg"
                                            border="0"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
