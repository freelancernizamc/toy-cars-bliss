import { Link } from 'react-router-dom';
import signup from '../../../src/assets/signup.jpg';
import React, { useState } from 'react';
import { useContext } from 'react';

import { AuthContext } from '../../../src/Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const SignUp = () => {

        return (
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img className="w-[600px] h-[500px]" src={signup} alt="login" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl font-bold">Sign Up Now!</h1>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label>
                                            <input type="checkbox" onClick={handleAccepted} name="accept" />
                                            {' '}
                                            Accept <Link to="/terms">Terms And Conditions</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#A31A25]" type="submit">Sign Up</button>
                                    </div>
                                </form>

                                <SocialLogin></SocialLogin>
                                <p className='text-[#A31A25]'>Already Have an Account? <Link to='/login' className='font-bold underline'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return <SignUp />;
};

export default SignUp;
