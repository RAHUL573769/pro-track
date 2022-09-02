import React from "react";
import { useForm } from "react-hook-form";
import unlock from "../Assets/images/unlock.svg";
import SocialLogin from "../Components/Login/SocialLogin";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>
    signInWithEmailAndPassword(data.email, data.password);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading />;
  }
  if (user || gUser) {
    console.log(user);
    navigate(from, { replace: true });
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="md:mb-20">
      <section className="h-screen">
      <div className="bg-blue-300">
        <Navbar />
      </div>
        <div className="container mx-auto px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 hidden md:block">
              <img src={unlock} className="w-full" alt="Login Info" />
            </div>
            <div className="md:w-8/12 w-full lg:w-5/12 lg:ml-20">
              <h2 className="font-bold text-center text-3xl mb-5">
                Login To Access
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    {...register("email", { required: true })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.firstName?.type === "required" &&
                        "email is required"}
                    </span>
                  </label>
                </div>
                <div className="form-control w-full">
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      {errors.firstName?.type === "required" &&
                        "Password is required"}
                    </span>
                  </label>
                </div>

                <input type="submit" className="btn w-full" value="Login" />
              </form>
              <p className="text-right">
                Don't have an account?{" "}
                <Link to={"/register"} className="font-bold">
                  Register.
                </Link>
              </p>
              <SocialLogin signInWithGoogle={signInWithGoogle}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
