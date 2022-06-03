import React from "react";
import loginBanner from "../../photos/login_banner.svg";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-2/4 h-screen bg-zinc-50 pr-14 pl-24 flex items-center">
        <img className="w-full" src={loginBanner} alt="banner" />
      </div>
      <div className="pl-14 pr-24 w-2/4">
        <h4 className="font-bold uppercase text-sm text-primary tracking-widest">
          Introducing
        </h4>
        <h1 className="font-bold text-6xl">
          New Messaging tool for our{" "}
          <span className="text-secondary">Team!</span>
        </h1>
        <div className="mt-14">
          <button className="btn btn-block btn-ghost bg-[#1877f2] text-white hover:bg-[#1876f2e6] mb-5">
            <BsFacebook className="text-2xl" />
            <span className="pl-2">Continue with Facebook</span>
          </button>
          <button className="btn btn-block btn-ghost shadow-lg mb-5">
            <FcGoogle className="text-2xl" />
            <span className="pl-2">Continue with Google</span>
          </button>
          <button className="btn btn-block btn-ghost bg-black text-white hover:bg-[#000000e6] mb-5">
            <BsApple className="text-2xl pb-0.5" />
            <span className="pl-2">Continue with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
