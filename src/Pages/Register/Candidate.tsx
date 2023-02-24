import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import MyButton from '../../components/MyButton';
import { useCreateCandidateMutation } from '../../features/candidate/candidateApi';
import { createUser } from '../../features/users/usersSlice';

type Inputs = {
  name: string,
  email: string,
  password: any,
};


const Candidate = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const [createCandidate] = useCreateCandidateMutation()
    const dispatch: any = useDispatch()

    const onSubmit: SubmitHandler<Inputs> = ({name, email, password }) => {    
        dispatch(createUser({name, email, password }));
        createCandidate({name, email, role: "candidate"})
        reset()
    };
    


  return (
        <form className='w-full  px-10  pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center  font-bold text-white">Create Candidate account</h4>
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