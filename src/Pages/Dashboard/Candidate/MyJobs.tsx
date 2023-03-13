import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetMyJobsQuery } from '../../../features/jobs/jobApi';

const MyJobs = () => {
    const navigate = useNavigate();
     const { candidatesReducer: {user} }: any = useSelector((state) => state);
    const {data: appliedJobs} = useGetMyJobsQuery(user?.email);

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
                        appliedJobs && appliedJobs.map((job: {}, index: number) => {
                            const {_id, title, location, workPlace, salary}: any = job;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:rounded hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center py-2'>{index + 1}</td>
                                    <td className='w-44 text-center py-2'>{title}</td>
                                    <td className='w-44 text-center py-2'>{location}</td>
                                    <td className='w-44 text-center py-2'>{workPlace}</td>
                                    <td className='w-44 text-center py-2'>{salary}</td>
                                    <td className='w-44 text-center'><button onClick={() => navigate(`/jobs/${_id}`)} className='bg-red-700 px-2 py-1 rounded-lg text-white'>Details</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyJobs;