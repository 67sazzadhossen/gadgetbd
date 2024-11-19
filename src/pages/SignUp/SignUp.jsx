import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoText } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiKeyLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonLoading from "../../components/Shared/ButtonLoading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const { SignUp, UpdateProfile, loading, setLoading, GoogleLogin } =
    useContext(AuthContext);
  const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(async (res) => {
        if (res.user) {
          const userData = {
            name: res.user.displayName,
            email: res.user.email,
            image: res.user.photoURL,
            role: "buyer",
            wishList: [],
            cartList: [],
          };

          const data = await axiosSecure.post("/users", userData);
          console.log(data.data);
          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imageFile = { image: data.image[0] };
    console.log(imageFile);

    SignUp(data.email, data.password)
      .then(async (res) => {
        if (res.user.accessToken) {
          const imageHosting = await axios.post(image_hosting_url, imageFile, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (imageHosting.data.success) {
            const image = imageHosting.data.data.display_url;
            const userData = {
              name: data.name,
              email: data.email,
              image: image,
              role: "buyer",
              wishList: [],
              cartList: [],
            };
            UpdateProfile(data.name, image)
              .then(async () => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Account Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                const res = await axiosSecure.post("/users", userData);
                console.log(res.data);
                setLoading(false);
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
        console.log(res);
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Email has already used",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Watching password for validation
  const password = watch("password");

  const inputs = [
    {
      name: "name",
      placeHolder: "Your name",
      icon: <IoText size={20} />,
      type: "text",
    },
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
    {
      name: "confirmPass",
      placeHolder: "Confirm Password",
      icon: <RiKeyLine size={20} />,
      type: "password",
    },
  ];

  return (
    <div>
      <div className="min-h-[80vh] flex justify-center items-center container mx-auto">
        <div className="w-1/2 hidden text-center lg:block">
          <h1 className="text-3xl font-bold">GadgetBD</h1>
          <p className="text-sm mt-2">
            Sign in to your gadgetBD account to shop the latest gadgets and
            manage your orders with ease.
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
                      validate: {
                        matchPassword: (value) =>
                          input.name === "confirmPass"
                            ? value === password || "Passwords do not match"
                            : true, // Return true for non-confirmPass fields
                        strongPassword: (value) =>
                          input.name === "password"
                            ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
                                value
                              ) ||
                              "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
                            : true, // Return true for non-password fields
                      },
                    })}
                    type={input.type}
                    className="w-full bg-transparent py-2 outline-none"
                    placeholder={input.placeHolder}
                  />
                </div>
                {/* Display error message below the field */}
                {errors[input.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[input.name]?.message}
                  </p>
                )}
              </div>
            ))}

            {/* Image input with error handling */}
            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("image", {
                  required: `Image is required`,
                })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image?.message}
                </p>
              )}
            </div>

            <div className="flex gap-2 items-center text-sm px-4">
              <MdOutlineMail size={16} />
              <Link>Forgot Password?</Link>
            </div>
            <button type="submit" className="btn w-full">
              {loading ? <ButtonLoading /> : "Sign Up"}
            </button>
          </form>

          <div className="lg:w-2/3 mx-auto mt-2">
            <div className="ml-1">
              {`Have an account?`}
              <Link to={"/login"} className="text-blue-400 ml-1">
                Login
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
    </div>
  );
};

export default SignUp;
