import React, { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const [loginError, setLoginError] =useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const {signIn, loading} = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Login successful')
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
            setLoginError(error.message);
        })
        
    };


    return (
      <div className="flex justify-center items-center h-[700px]">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Login</h2>
          
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
            </div>
            {/* Error message */}
            <div>
              {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
            <input type="submit" className="btn w-full my-4" value="Login" />
          </form>
          <p>
            New to phono website{" "}
            <Link
              to="/signup"
              className="text-secondary underline-offset-4 underline"
            >
              Please SignUp
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full btn-primary">
            Sign in with google
          </button>
        </div>
      </div>
    );
};

export default Login;