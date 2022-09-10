import { Link } from "react-router-dom";
import { GInput } from "../../components/GInput";

const Signup = () => {
  const data = [
    { id: 1, label: "name", type: "text", name: "name", caption: "name" },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "Email",
      caption: "example@email.com",
    },
    {
      id: 3,
      label: "Password",
      type: "password",
      name: "password",
      caption: "*****",
    },
    {
      id: 4,
      label: "Confirem Password",
      type: "password",
      name: "confiremPassword",
      caption: "*****",
    },
  ];

  return (
    <div className="border  shadow-md p-5 w-full max-w-md rounded-md">
      <h1 className="text-3xl text-center font-bold mb-5 text-indigo-600">
        Sign up
      </h1>

      <form className="flex flex-col gap-y-5">
        <GInput data={data} />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-7 py-4 rounded-md transition-colors hover:bg-indigo-700"
        >
          Sign up
        </button>
        <p className="text-gray-600 text-sm text-center">
          alredy have account?
          <Link
            to="/login"
            className="text-indigo-400 underline underline-offset-2 ml-1 hover:text-indigo-600 transition-colors hover:no-underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
