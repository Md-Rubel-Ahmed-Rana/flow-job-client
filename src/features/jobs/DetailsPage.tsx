import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
     const {id} = useParams();
     const [details, setDetails] = useState({});
     const {title}: any = details

     useEffect(() => {
        axios.get(`http://localhost:5000/api/jobs/${id}`)
        .then((data) => setDetails(data.data.job))
     }, [id])

    return (
        <div className='m-10'>
            <h1 className="text-3xl">Job Details: {title}</h1>
        </div>
    );
};

export default JobDetails;