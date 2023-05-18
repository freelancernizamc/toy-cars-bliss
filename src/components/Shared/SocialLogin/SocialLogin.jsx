import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle text-rose-600 bg-white">
                    <FaGoogle />
                </button>
            </div>

        </div>

    );
};

export default SocialLogin;