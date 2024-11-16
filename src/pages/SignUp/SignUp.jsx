import { useForm } from "react-hook-form";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiKeyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Watching password for validation
  const password = watch("password");

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
        <div className="w-1/2 hidden lg:block">
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
              <div
                key={idx}
                className="bg-base-300 flex items-center px-4 rounded-md"
              >
                {input.icon}
                <div className="divider divider-horizontal py-2"></div>
                <input
                  {...register(`${input.name}`, {
                    required: `${input.placeHolder} is required`,
                    validate:
                      input.name === "confirmPass"
                        ? (value) =>
                            value === password || "Passwords do not match"
                        : undefined,
                  })}
                  type={input.type}
                  className="w-full bg-transparent py-2 outline-none"
                  placeholder={input.placeHolder}
                />
              </div>
            ))}

            {/* Display error messages */}
            {Object.keys(errors).map((key) => (
              <p key={key} className="text-red-500 text-sm mt-1">
                {errors[key]?.message}
              </p>
            ))}

            <div className="flex gap-2 items-center text-sm px-4">
              <MdOutlineMail size={16} />
              <Link>Forgot Password?</Link>
            </div>
            <button type="submit" className="btn w-full">
              Sign Up
            </button>
          </form>

          <div className="lg:w-2/3 mx-auto mt-2">
            <div className="ml-1">
              {`Have an account?`}
              <Link to={"/login"} className="text-blue-400 ml-1">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
