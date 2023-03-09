import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateJobPostMutation } from '../../../features/jobs/jobApi';

type Inputs = {
  title: string,
  location: string,
  jobType: string,
  employerEmail: string,
  officialEmail: string,
  website: string,
  salary: string,
  workDay: string,
  workTime: string,
  aboutEmployer: string,
  requiredTechs: string,
  goodToTechs: string,
  requirements: string,
  responsibilities: string,
  aboutCompany: string,
};

const AddJob = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const [postJob] = useCreateJobPostMutation();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        postJob(data)
        console.log(data)
    };


    return (
        <div>
            <h3 className="text-4xl text-center font-bold">Add New Job</h3>
            <form onSubmit={handleSubmit(onSubmit)}  className='w-full p-10'>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                    <label htmlFor="title">
                    Title:
                    <input className='ml-2 p-2' {...register("title", { required: true })} />
                     </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Location:
                         <input className='ml-2 p-2' {...register("location", { required: true })} />
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <span>Job type: </span>
                    <select {...register("jobType", { required: true })}  className='p-2' name="type" id="type">
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote/Onsite">Remote/Onsite</option>
                    </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Employer email:
                        <input className='ml-2 p-2' {...register("employerEmail", { required: true })} />
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Official email:
                        <input className='ml-2 p-2' {...register("officialEmail", { required: true })} />
                    </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="website">
                        Website:
                        <input className='ml-2 p-2' {...register("website", { required: true })} />
                    </label>
                    </div>
                </div>
                 <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Salary: 
                        <input className='ml-2 p-2' {...register("salary", { required: true })} />
                    </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Working Day:
                        <input className='ml-2 p-2' {...register("workDay", { required: true })} /> 
                    </label>
                    </div>
                </div>
                <div className='flex justify-between gap-40'>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                        Working Time:
                        <input className='ml-2 p-2' {...register("workTime", { required: true })} /> 
                    </label>
                    </div>
                    <div className='mb-3 flex gap-3'>
                        <p>About</p>
                        <textarea {...register("aboutEmployer", { required: true })} placeholder="About yourself"  name="aboutEmployer" id="about" cols={20} rows={2}></textarea>

                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="requiredTechs">
                        Required Techs:
                         <input className='ml-2 p-2' {...register("requiredTechs", { required: true })} /> 
                    </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="goodToTechs">
                        Good To Have Techs:
                         <input className='ml-2 p-2' {...register("goodToTechs", { required: true })} /> 
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='flex' htmlFor="requirements">
                        <span>Responsibilities:</span>
                        <textarea {...register("requirements", { required: true })} className='p-2 ml-2 w-full' name="requirements" id="requirements" placeholder='Requirements' cols={30} rows={3}></textarea>
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='flex' htmlFor="requiredTechs">
                        <span>Responsibilities:</span>
                        <textarea {...register("responsibilities", { required: true })} className='p-2 ml-2 w-full' name="responsibilities" id="responsibilities" placeholder='Responsibilities' cols={30} rows={3}></textarea>
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='flex' htmlFor="requiredTechs">
                        <span>About company:</span>
                        <textarea  {...register("aboutCompany", { required: true })} className='p-2 ml-2 w-full' name="aboutCompany" id="about" placeholder='About your company' cols={30} rows={3}></textarea>
                    </label>
                </div>
                <button className='bg-blue-600 px-10 py-3 rounded w-full text-white font-bold' type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;