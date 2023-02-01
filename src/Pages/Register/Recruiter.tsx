import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from '../../components/MyButton';
import useSaveData from '../../hooks/useSaveData';


type Inputs = {
  name: string,
  company: string,
  image: any,
  address: string,
  password: string
  officeEmail: string
  email: string
};


const Recruiter = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const handleStoreData = useSaveData();

    const onSubmit: SubmitHandler<Inputs> = data => {
        const recruiterData = {
            name: data.name,
            company: data.company,
            image: "image",
            address: data.address,
            password: data.password,
            officeEmail: data.officeEmail,
            email: data.email
        }
        handleStoreData("http://localhost:5000/api/recruiters", recruiterData);
       reset()
    };

  return (
        <form className='w-full  px-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center font-bold text-white">Create Recruiter account</h4>
            <div className='mb-3 '>
                <p className='text-lg text-white font-semibold mb-1'>Upload image.</p>
                <input type="file" className='p-2 w-full bg-white rounded' {...register("image", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Your name.</p>
                <input className='p-2 w-full rounded' {...register("name", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Your email</p>
                <input className='p-2 w-full rounded' {...register("email", { required: true })} />
            </div>
            <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Comapny name.</p>
                <input className='p-2 w-full rounded' {...register("company", { required: true })} />
            </div>
            <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Comapny Address.</p>
                <input className='p-2 w-full rounded' {...register("address", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Official email</p>
                <input className='p-2 w-full rounded' {...register("officeEmail", { required: true })} />
            </div>
            
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                <input className='p-2 w-full rounded' {...register("password", { required: true })} />
            </div>
            <MyButton text="Register" />
        </form>
  );
};

export default Recruiter;