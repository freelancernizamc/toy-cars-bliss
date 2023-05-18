
import { Link } from 'react-router-dom';
import signup from '../../../public/signup.jpg';
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
                            <form>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#A31A25]">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-[#A31A25]'>Already Have an Account?<Link to='/login' className='font-bold underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;