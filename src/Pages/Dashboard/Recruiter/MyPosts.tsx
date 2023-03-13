import React from 'react';
import JobTable from '../../../components/JobTable';
import {  useGetJobsQuery } from '../../../features/jobs/jobApi';

const MyPosts = () => {
    const {data, isLoading, isError} = useGetJobsQuery([]);
    if(isLoading){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Data Loading...</h1>
    }
    if(isError){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Error while loading data.</h1>
    }
    
    return (
        <div>
            <JobTable jobs={data?.jobs}/>
        </div>
    );
};

export default MyPosts;