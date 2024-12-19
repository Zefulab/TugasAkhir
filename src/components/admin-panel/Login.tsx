import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return  <div className="bg-black main-h-screen grid place-items-center">
      <button className="bg-white px-8 py-4 flex gap-2 items-center">
        <FcGoogle size={30} /> Sign In with Google</button>
    </div>
};

export default Login;
