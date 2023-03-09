import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
     const {id} = useParams();
    return (
        <div className='m-10'>
            <h1 className="text-3xl">Job Details: {id}</h1>
        </div>
    );
};

export default JobDetails;