import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiKeyLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import ButtonLoading from "../../components/Shared/ButtonLoading";
const Login = () => {
  const { Login, loading, setLoading, GoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(async (res) => {
        if (res.user) {
          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    console.log(data);

    Login(data.email, data.password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfull",
            showConfirmButton: false,
            timer: 1500,
          });

          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Input valid email and password",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const inputs = [
    {
      name: "email",
      placeHolder: "Your email",
      icon: <LuUser2 size={20} />,
      type: "email",
    },
    {
      name: "password",
      placeHolder: "Your Password",
      icon: <RiKeyLine size={20} />,
      type: "password",
    },
  ];

  return (
    <div className="min-h-[80vh] flex justify-center items-center container mx-auto">
      <div className="w-1/2 hidden text-center lg:block">
        <h1 className="text-3xl font-bold">GadgetBD</h1>
        <p className="text-sm mt-2">
          Sign in to your gadgetBD account to shop the latest gadgets and manage
          your orders with ease.
        </p>
      </div>

      <div className="lg:divider lg:divider-horizontal py-36"></div>

      <div className="md:w-1/2">
        <PiUsersThreeLight size={150} className="mx-auto mb-6" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="space-y-5 lg:w-2/3 mx-auto"
        >
          {inputs.map((input, idx) => (
            <div key={idx}>
              <div className="bg-base-300 flex items-center px-4 rounded-md">
                {input.icon}
                <div className="divider divider-horizontal py-2"></div>
                <input
                  {...register(`${input.name}`, {
                    required: `${input.placeHolder} is required`,
                  })}
                  type={input.type}
                  className="w-full bg-transparent py-2 outline-none bg-none"
                  placeholder={input.placeHolder}
                />
              </div>
              {/* Error message displayed directly below the input field */}
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[input.name]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="flex gap-2 items-center text-sm px-4">
            <MdOutlineMail size={16} />
            <Link>Forgot Password?</Link>
          </div>
          <button type="submit" className="btn w-full">
            {loading ? <ButtonLoading /> : "Login"}
          </button>
        </form>

        <div className="lg:w-2/3 mx-auto mt-2">
          <div className="ml-1">
            {`Don't have an account?`}
            <Link to={"/sign-up"} className="text-blue-400 ml-1">
              Sign Up
            </Link>
          </div>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="flex gap-1 items-center btn w-full"
          >
            <FcGoogle />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
