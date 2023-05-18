import nizam from '../../../public/nizam.png'
import Marquee from "react-fast-marquee";

const Blogs = () => {
    return (
        <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={nizam}
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Assalamualaikum!
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Welcome To
                            <br className="hidden md:block" />
                            Milstone 11 Assignment{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Question & Answer Section
                            </span>
                        </h2>

                        <div className="flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-rose-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                See Assignment
                            </a>
                            <a
                                href="/contact"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee className='text-3xl text-[#45313A] bg-[#F5B340]'>
                Assalamualaikum! Welcome to Assignment-11 Question & Answer Section, I am Md Nizam Uddin, Student of Programming Hero, Batch 07.
            </Marquee>
            <div className='mx-10 mt-10'>
                <h2 className='text-3xl text-blue-900 font-bold'>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-3xl font-bold mt-2'>Ans: <span className='text-green-700'>Access Token:</span>
                    An access token is a credential that is used to access protected resources on behalf of a user. It is typically issued by an authorization server after the user authenticates and authorizes the client application. The access token contains information about the user's identity and permissions and is used to authenticate requests to access protected resources.<br />
                    <span className='text-green-700'>Refresh Token:</span>
                    A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is also issued by the authorization server during the initial authentication process. The refresh token is securely stored on the client-side and is used to request a new access token without requiring the user to re-authenticate.<br />
                    <span className='text-green-700'>How do they Work:</span> When the access token expires, the client sends a request to the authorization server with the refresh token to obtain a new access token. If the refresh token is valid and not expired, the authorization server issues a new access token and, optionally, a new refresh token. The new access token can be used to continue accessing protected resources.<br />
                    <span className='text-green-700'>Storage on the Client-side:</span>
                    Both the access token and refresh token should be securely stored on the client-side to prevent unauthorized access. Here are some common storage options:

                    Secure HTTP-only Cookies: You can store the tokens as secure HTTP-only cookies. These cookies are not accessible by JavaScript, making them less vulnerable to cross-site scripting (XSS) attacks. They are automatically sent with each API request by the browser.

                    Local Storage: You can store the tokens in the browser's local storage. However, this approach is less secure since the tokens are accessible by JavaScript, making them vulnerable to cross-site scripting attacks.

                    Session Storage: Similar to local storage, you can store the tokens in the browser's session storage. The tokens are scoped to the current session and are cleared when the session ends. However, they are still accessible by JavaScript.</p>
                <h2 className='text-3xl text-blue-900 font-bold mt-5'>Question 2: Compare SQL and NoSQL databases?</h2>
                <p className='text-3xl font-bold mt-2'>Ans: Comparison between SQL and NoSQL databases are as Follows: <br />
                    1. Full word of SQL is Structured Query Language and NoSQL is Not Only SQL.<br />
                    2. SQL: SQL databases use a structured data model known as a relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using keys.<br />
                    NoSQL: NoSQL databases use various data models, including key-value, document, columnar, and graph. They provide flexibility in structuring data and do not enforce rigid schemas or predefined relationships. <br />
                    3. SQL: SQL databases are vertically scalable, meaning they can handle increased load by adding more resources to a single server (e.g., CPU, RAM). Scaling up can have limitations.<br />
                    NoSQL: NoSQL databases are horizontally scalable, allowing for distributed systems to handle increased load by adding more servers to the database cluster. Scaling out provides better scalability options.</p>
                <h2 className='text-3xl text-blue-900 font-bold mt-5'>Question 3: What is express js? What is Nest JS?</h2>
                <p className='text-3xl font-bold mt-2'>Ans: <span className='text-green-700'>Express js:</span> <br />

                    Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web applications and APIs. Express.js offers a robust set of features for routing, handling HTTP requests and responses, middleware support, and template engine integration. It allows developers to create scalable and modular web applications using JavaScript on the server-side.<br />
                    <span className='text-green-700'>Nest js:</span> <br />
                    Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is inspired by Angular and follows similar architectural patterns, such as modules, controllers, and providers. Nest.js leverages TypeScript's features and concepts to build robust and maintainable applications.</p>
                <h2 className='text-3xl text-blue-900 font-bold mt-5'>Question 4: What is MongoDB aggregate and how does it workS</h2>
                <p className='text-3xl font-bold my-2'>Ans: <span className='text-green-700'>Mongodb Aggregate:</span><br />
                    In MongoDB, the aggregate method is used to perform advanced data aggregation operations on the documents in a collection. It allows you to process and transform the data using a pipeline of stages. Each stage in the pipeline performs a specific operation on the input documents and passes the results to the next stage.<br />
                    <span className='text-green-700'>How the aggregate method works:</span>

                    Define the pipeline: The aggregation pipeline is an array of stages. Each stage represents a specific operation, such as filtering, grouping, sorting, or projecting fields. You define the stages in the order in which they should be executed.

                    Execute the pipeline: Once you have defined the pipeline, you pass it to the aggregate method of the MongoDB collection. MongoDB executes the pipeline stages in order, processing the documents and passing the results from one stage to the next.

                    Process the stages: Each stage in the pipeline operates on the input documents and produces an output based on the specified operation. Some commonly used stages include:<br />
                    $match: Filters the documents based on specified criteria.<br />
                    $group: Groups the documents by a specified key and performs aggregation functions like sum, count, average, etc. on grouped data.<br />
                    $sort: Sorts the documents based on specified fields.</p>
            </div>
        </div>


    );
};


export default Blogs;