import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import unlock from "../Assets/images/unlock.svg";
import SocialLogin from "../Components/Login/SocialLogin";
import Loading from "../Components/Shared/Loading";
import Navbar from "../Components/Shared/Navbar";
import auth from "../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    createUserWithEmailAndPassword(data.email, data.displayName, data.password);
  if (user || gUser) {
    console.log(user);
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  }
    


  return (
    <div>
      <div className="md:mb-24">
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
                  Register Your Account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full">
                    <input
                      type="text"
                      name="displayName"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      {...register("displayName", { required: true })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.firstName?.type === "required" &&
                          "Name is required"}
                      </span>
                    </label>
                  </div>
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

                  <input
                    type="submit"
                    className="btn w-full"
                    value="Register"
                  />
                </form>
                <p className="text-right">
                  Already have an account?{" "}
                  <Link to={"/login"} className="font-bold">
                    Login.
                  </Link>
                </p>
                <SocialLogin signInWithGoogle={signInWithGoogle} gUser={gUser} gLoading={gLoading} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
