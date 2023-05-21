import { Link } from 'react-router-dom';
import login from '../../../src/assets/login.jpg';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders'
import { useNavigate, useLocation } from "react-router-dom";
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                                <form onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#A31A25]">Login</button>
                                    </div>
                                </form>
                                <SocialLogin></SocialLogin>
                                <p className='text-[#A31A25]'>New to Cars Toy Bliss?<Link to='/signup' className='font-bold underline'>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return <Login />;
};

export default Login;
