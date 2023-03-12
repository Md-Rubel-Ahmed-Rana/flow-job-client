import { useParams } from 'react-router-dom';
import { useGetSingleJobQuery } from './jobApi';



const JobDetails = () => {
     const {id}: any = useParams();
     const {data} = useGetSingleJobQuery(id);

     const {title, employerEmail, jobType, website, salary, workDay, workTime, aboutEmployer, location, skills, requirements, responsibilities } = data?.job || {}

     console.log(data?.job);

    return (
        <div className='m-10'>
            <h1 className="text-3xl">Job Details: {title}</h1>
        </div>
    );
};

export default JobDetails;