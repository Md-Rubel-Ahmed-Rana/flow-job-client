import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { candidateFetcher, createCandidate, deleteCandidate } from './candidateSlice';
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

type Inputs = {
  name: string,
  email: string,
  password: string
};

const Candidates = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {candidates} = useSelector((state: any) => state.candidatesReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(candidateFetcher())
    }, [])
    
    const onSubmit: SubmitHandler<Inputs> = data => {
        const candidate = {
            id: uuidv4(),
            name: data.name,
            email: data.email,
            password: data.password
        }
        dispatch(createCandidate(candidate))
    }


    return (
        <div className='my-5'>
            <div>
                <form className='w-1/2 text-center text-white mx-auto bg-blue-500 rounded-lg p-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="name"> Name
                        <input className='p-1 rounded text-black'  {...register("name", { required: true })} />
                        </label>
                        {errors.name && <p>This field is required</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            Email
                        <input className='p-1 rounded text-black' {...register("email", { required: true })} />
                        </label>
                        {errors.email && <p>This field is required</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            Password
                        <input className='p-1 rounded text-black' {...register("password", { required: true })} />
                        </label>
                        {errors.password && <p>This field is required</p>}
                    </div>
                    <button className='text-white text-xl bg-blue-800 rounded-md px-5 py-2 font-bold' type="submit">Register</button>
                </form>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    candidates.map((candidate: any) => <div className='text-white p-10 rounded-lg bg-blue-700'>
                        <h2 className='text-2xl font-bold'>{candidate.name}</h2>
                        <h2 className='text-xl font-bold'>{candidate.email}</h2>
                        <button onClick={ () => dispatch(deleteCandidate({id: candidate.id}))} className='text-lg font-bold bg-red-400 rounded p-2'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Candidates;

