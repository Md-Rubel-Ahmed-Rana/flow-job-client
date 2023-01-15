import axios from 'axios';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from '../../components/MyButton';


type Inputs = {
  name: string,
  email: string,
  password: any,
};


const Candidate = () => {
    // const hostKey = process.env.REACT_APP_IMAGE_HOST_KEY
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const newUser = {name: data.name, email: data.email, password: data.password }
        axios.post("http://localhost:5000/api/candidate", newUser)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err))
    };

  return (
        <form className='w-full  px-10  pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center  font-bold">Create Candidate account</h4>
            {/* <div className='mb-3 '>
                <p className='text-lg text-white font-semibold mb-1'>Upload image.</p>
                <input type="file" className='p-2 w-full bg-white rounded' {...register("image", { required: false })} />
            </div> */}
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter name.</p>
                <input type="text" className='p-2 w-full rounded' {...register("name", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter email</p>
                <input type="email" className='p-2 w-full rounded' {...register("email", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                <input type="password" className='p-2 w-full rounded' {...register("password", { required: true })} />
            </div>
            <MyButton text="Register" />
        </form>
  );
};

export default Candidate;