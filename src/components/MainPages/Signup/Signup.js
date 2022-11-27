import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data.role);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Create Successfully')
            // update user here blow
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
              
              saveUser(data.name, data.email, data.role);
            })
            .catch(error => console.log(error))

        })
        .catch(error => {
            console.log(error);
            setSignUpError(error.message);
        })
        
    };

    // save user to database
    const saveUser = (name, email, role) =>{
      const user = {name, email, role};
      fetch("http://localhost:5000/users",{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        navigate("/");
      })
    }

    return (
      <div className="flex justify-center items-center h-[700px]">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
            </div>
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Select Your Role
                </span>
              </label>
              <select {...register("role",{
                required: 'User Role is required'
              })}
              className="select select-bordered"
              >
                <option disabled selected>
                  
                </option>
                <option value='user'>User</option>
                <option value='seller'>Seller</option>
              </select>
              {errors.role && <p className='text-red-500'>{errors.role?.message}</p>}
            </div>
            {signUpError && <p className='text-red-500'>{signUpError}</p>}
            <input type="submit" className="btn w-full my-4" value="signup" />
          </form>
          <p>
            Already have an account{" "}
            <Link
              to="/login"
              className="text-secondary underline-offset-4 underline"
            >
              Please Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Signup;