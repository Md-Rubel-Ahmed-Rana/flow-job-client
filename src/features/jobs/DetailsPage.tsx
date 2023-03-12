import {  useParams } from 'react-router-dom';
import { useGetSingleJobQuery } from './jobApi';



const JobDetails = () => {
     const {id}: any = useParams();
     const {data} = useGetSingleJobQuery(id);

     console.log(data);

     const {title, employerEmail, jobType, jobPlace, website, salary, workDay, workTime, location, skills, requirements, responsibilities, companySize, companyName } = data?.job || {}

    return (
        <div className='m-10'>
            <h1 className="text-3xl font-bold">Job Position: {title} ({jobPlace})</h1>
            <h5 className='text-xl font-semibold'>Location: {location}.</h5>
            <h5 className='text-xl font-semibold'>Company Name: {companyName}.</h5>
            <h5 className='text-xl font-semibold'>Company Size: {companySize}.</h5>
            <p>Work Day: {workDay} days/week</p>
            <p>Job Type: {jobType}</p>
            <p>Work Time: {workTime}/day</p>
            <p>Salary: {salary}/month</p>

            <p>Employer Email: {employerEmail}</p>
            <p>Website: <a href={website} rel="noreferrer" target={'_blank'}  className='text-blue-700 font-extrabold' >Visit Now</a></p>
            
            <div>
                <button className='bg-blue-700 py-2 px-16 mt-4 text-white rounded'>Apply</button>
            </div>

            <h5 className='text-xl mt-5 font-semibold'>Job overview</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit laborum, corrupti voluptas rerum obcaecati sunt dolorem temporibus dolorum quod ipsum reprehenderit quia a ad vel quis illo saepe ea debitis cupiditate repudiandae dicta voluptates. Ab nesciunt labore, obcaecati dolores reprehenderit harum corrupti illo laborum, nulla eaque aliquid sunt quod repellat exercitationem hic cumque iusto perferendis. Quaerat numquam pariatur facilis harum illum, consequatur corporis, nobis ab consectetur odio ea beatae iste perspiciatis iure sit at! Unde, pariatur dicta! Dolores commodi impedit tempore, nihil iure, quod culpa obcaecati aliquid eligendi sint expedita eos sunt facere eaque recusandae laboriosam dolorem molestiae quis repellendus.</p>
            <h5 className='text-2xl font-semibold mt-5'>Skills</h5>
            <ul className=''>
                {
                skills && skills.map((skill: "") => <li className='list-disc ml-5'>{skill}</li>)
                }
            </ul>

            <h5 className='text-2xl font-semibold mt-5'>Requirements</h5>
            <ul className=''>
                {
                requirements && requirements.map((requirement: "") => <li className='list-disc ml-5'>{requirement}</li>)
                }
            </ul>

            <h5 className='text-2xl font-semibold mt-5'>Responsibilities</h5>
            <ul className=''>
                {
                responsibilities && responsibilities.map((responsibility: "") => <li className='list-disc ml-5'>{responsibility}</li>)
                }
            </ul>
        </div>
    );
};

export default JobDetails;