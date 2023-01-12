import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from '../../components/MyButton';


type Inputs = {
  name: string,
  company: string,
  image: any,
  position: string
};


const Recruiter = () => {
    // const hostKey = process.env.REACT_APP_IMAGE_HOST_KEY
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        // const image = data.image[0]
        // const formData = new FormData();
        // formData.append("image", image);
        // // image upload handler

    };

  return (
        <form className='w-full  px-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center font-bold">Create Recruiter account</h4>
            <div className='mb-3 '>
                <p className='text-lg text-white font-semibold mb-1'>Upload image.</p>
                <input type="file" className='p-2 w-full bg-white rounded' {...register("image", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter your name.</p>
                <input className='p-2 w-full rounded' {...register("name", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Select</p>
                <select  className='p-2 w-full rounded' {...register("position", { required: true })}  id="position">
                    <option selected value="candidate">candidate</option>
                    <option value="recruiter">Recruiter/HR</option>
                </select>
            </div>
            <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Comapny.</p>
                <input className='p-2 w-full rounded' {...register("company", { required: true })} />
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
  );
};

export default Recruiter;