import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jobsFetcher } from './jobsSlice';

const Jobs = () => {
    const {jobs, isLoading, error} = useSelector((state: any) => state.jobsReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(jobsFetcher())
    }, [dispatch])


    return (
        <div >
            {isLoading &&  <h2 className="text-3xl text-center font-bold w-48 mx-auto bg-blue-800 text-white">Loading...</h2>}
            {error &&  <h2 className="text-3xl text-center font-bold w-48 mx-auto bg-blue-800 text-white">{error}</h2>}
            <h2 className="text-3xl text-center font-bold">Find Your Dream Job</h2>
            <div className='px-20 py-5 w-full text-center'>
                <input className='w-4/5 px-10 py-2' type="text" placeholder='Searh job here' /> <button className='btn btn-sm btn-primary'>Search</button>
            </div>
            <div>
                {
                    jobs.map((job: any) => {
                        const {title, location, website, salary, workDay, workTime, requiredTechs, goodToHave, responsibilities, requirements, about} = job
                        return (
                            <div className='bg-slate-200 p-10 mb-2'>
                                <h3 className='text-3xl font-bold'>{title}</h3>
                                <div>
                                    <p>Location: {location}</p>
                                    <p>Working Day: {workDay}/week</p>
                                    <p>Working Time: {workTime}</p>
                                    <p>Salary: {salary}</p>
                                </div>
                                <hr />
                                <Link className='text-blue-700' to={website}>Website</Link>
                                <br /><br />
                                <div>
                                    <h2 className='text-xl font-bold'>Requirements</h2>
                                    {
                                       requirements.map((require: any, index: number) => <p>{index + 1}. {require.req}</p>) 
                                    }
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-xl font-bold'>Responsibilities</h2>
                                    {
                                       responsibilities.map((respone: any, index: number) => <p>{index + 1}. {respone.res}</p>) 
                                    }
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-xl font-bold'>Required Technologies</h2>
                                    {
                                       requiredTechs.map((tech: any, index: number) => <p>{index + 1}. {tech.tech}</p>) 
                                    }
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-xl font-bold'>Good To Have</h2>
                                    {
                                       goodToHave.map((tech: any, index: number) => <p>{index + 1}. {tech.tech}</p>) 
                                    }
                                </div>
                                <div className='mt-4'>
                                    <h2 className='text-xl font-bold'>About</h2>
                                    <p>{about}</p>
                                </div>
                                <div className='mt-5'>
                                    <button className="btn px-20 btn-primary">Apply</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Jobs;