import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import login from "../../assets/images/login_logo.png"
import MyButton from '../../components/MyButton';
import app from '../../config/firebase.config';

const auth = getAuth(app)

type Inputs = {
  name: string,
  username: string,
};


const Register = () => {
    
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((err) => console.log(err))
    }


    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    <div className='flex'>
        <div className='w-1/2 '>
            <img className='h-full' src={login} alt="" />
        </div>
        <div className='w-1/2 bg-blue-600 mx-auto'>
            <form className='w-full  px-10 pt-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter your name.</p>
                    <input className='p-2 w-full rounded' {...register("name", { required: true })} />
                </div>
                <div className='mb-3'>
                     <p className='text-lg text-white font-semibold mb-1'>Enter username.</p>
                    <input className='p-2 w-full rounded' {...register("username", { required: true })} />
                </div>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Your position.</p>
                    <input className='p-2 w-full rounded' {...register("name", { required: true })} />
                </div>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter email</p>
                    <input className='p-2 w-full rounded' {...register("name", { required: true })} />
                </div>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                    <input className='p-2 w-full rounded' {...register("name", { required: true })} />
                </div>
                <MyButton text="Register" />
            </form>
            <div onClick={handleGoogleLogin} className='px-10 mb-5'>
                <MyButton  text="Login with Google" />
            </div>
        </div>
    </div>
  );
};

export default Register;