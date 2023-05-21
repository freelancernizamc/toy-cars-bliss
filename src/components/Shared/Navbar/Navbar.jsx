

import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/toycarsbliss.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {user?.email ? <>
            <li><Link to='/addatoy'>Add A Toy</Link></li>
            <li><Link to='/mytoys'>My Toys</Link></li>
            <div className="w-10 rounded-full tooltip tooltip-bottom " data-tip={user.displayName}>
                <img src={user.photoURL} />
            </div>
            <li><button onClick={handleLogOut} className="btn bg-[#A31720]">Log Out</button></li>
        </>
            : <Link to="/login" className="btn bg-[#A31720]">Login</Link>
        }
    </>





    return (
        <div>
            <div className="navbar bg-[#45313A] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#45313A] text-white rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt='logo' />
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex mr-5">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;