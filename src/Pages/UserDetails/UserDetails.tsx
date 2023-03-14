import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../../features/jobs/jobApi';

const UserDetails = () => {
     const navigate = useNavigate();
    const {id}: any = useParams();
    const {data} = useGetUserDetailsQuery(id);
    const candidate = data?.candidate
    return (
        <div className='m-10'>
            <button onClick={() => navigate(-1)} className='bg-blue-600 rounded-md py-2 px-5 text-lg text-white font-semibold'> Back</button>
            <div className='my-5'>
                <h1 className="text-3xl font-bold">Details for : {candidate?.name} {candidate?.email}</h1>
            </div>
        </div>
    );
};

export default UserDetails;