
import { Link } from 'react-router-dom';
import login from '../../../public/login.jpg';
const Login = () => {
    return (
        <div>

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">

                        <img className="w-full h-[300px]" src={login} alt="login" />
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Login Please!</h1>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#A31A25]">Login</button>
                                </div>
                            </form>
                            <p className='text-[#A31A25]'>New to Cars Toy Bliss?<Link to='/signup' className='font-bold underline'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;