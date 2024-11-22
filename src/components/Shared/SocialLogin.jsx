import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { setLoading, GoogleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(async (res) => {
        if (res.user) {
          const userData = {
            name: res.user.displayName,
            email: res.user.email,
            image: res.user.photoURL,
            role: "buyer",
            wishlist: [],
            cartlist: [],
          };

          const data = await axiosPublic.post("/users", userData);
          console.log(data.data);
          setLoading(false);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setLoading(false);
          navigate(from, { replace: true });
        }
      });
  };

  // console.log(user);

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex gap-1 items-center btn w-full"
      >
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
