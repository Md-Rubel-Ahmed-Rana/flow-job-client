import React from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteJobMutation, useGetJobsQuery } from '../../../features/jobs/jobApi';

const MyPosts = () => {
    const {data, isLoading, isError} = useGetJobsQuery([]);
    const [deleteJob] = useDeleteJobMutation();


    const handleDeleteJob = async(id: string) => {
        const result: any = await deleteJob(id);
        if(result?.data?.success){
            return toast.success(result?.data?.message)
        }
    }

    if(isLoading){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Data Loading...</h1>
    }

    if(isError){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Error while loading data.</h1>
    }


    return (
        <div className='w-full'>
            <div className='flex justify-between py-1'>
                <input className='p-1 w-full' type="text" name="name" id="name" placeholder='Enter name to search' />
                <button className='bg-blue-700 ml-2 px-10 text-white rounded'>Search</button>
            </div>
            <table>
                <thead className='flex justify-start bg-blue-700 text-white p-2 rounded'>
                    <th className='w-10 py-2 text-center'></th>
                    <th className='w-44 py-2 text-center'>Title</th>
                    <th className='w-44 py-2 text-center'>Location</th>
                    <th className='w-44 py-2 text-center'>Work</th>
                    <th className='w-44 py-2 text-center'>Salary</th>
                    <th className='w-44 py-2 text-center'>Action</th>
                </thead>
                <tbody>
                    {
                        data?.jobs && data?.jobs.map((post: any, index: any) => {
                            const {_id, title, location, jobType, salary} = post;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:text-white hover:bg-blue-500'>
                                    <td className='w-10  py-2'>{index + 1}</td>
                                    <td className='w-44  py-2'>{title}</td>
                                    <td className='w-44 text-center py-2'>{location}</td>
                                    <td className='w-44 text-center py-2'>{jobType}</td>
                                    <td className='w-44 text-center py-2'>{salary}</td>
                                    <td className='w-44 text-center'><button onClick={() => handleDeleteJob(_id)} className='bg-red-700 px-2 py-1 rounded-lg text-white'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPosts;