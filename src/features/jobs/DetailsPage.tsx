import { useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { useApplyJobMutation, useGetSingleJobQuery } from './jobApi';



const JobDetails = () => {
   const { candidatesReducer: {user} }: any = useSelector((state) => state);
    const navigate = useNavigate()
     const {id}: any = useParams();
     const {data} = useGetSingleJobQuery(id);
     const [applyJob] = useApplyJobMutation();


     const {title, employerEmail, jobType, jobPlace, website, salary, workDay, workTime, location, skills, requirements, responsibilities, companySize, companyName, experience, employerType } = data?.job || {}

    return (
        <div className='mx-10'>
            <div className='my-5'>
                <button onClick={() => navigate(-1)} className='bg-blue-600 rounded-md py-2 px-5 text-lg text-white font-semibold'> Back</button>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Job Position: {title} ({jobPlace})</h1>
                <h5 className='text-xl font-semibold'>Location: {location}.</h5>
                <h5 className='text-xl font-semibold'>Company Name: {companyName}.</h5>
                <h5 className='text-xl font-semibold'>Company Size: {companySize}.</h5>
            </div>

            <div className='mt-5 text-xl font-medium'>
                <p>Work Day: {workDay} days/week</p>
                <p>Job Type: {jobType}</p>
                <p>Work Time: {workTime}/day</p>
                <p>Experience: {experience}</p>
                <p>Salary: {salary}/month</p>
            </div>

            <div className='mt-5 text-xl font-medium'>
                <p>Employer Email: {employerEmail}</p>
                <p>Employer Position: {employerType ? employerType : "Unknown"}</p>
                <p>Website: <a href={website} rel="noreferrer" target={'_blank'}  className='text-blue-700 font-extrabold' >Visit Now</a></p>
            </div>
            
            {/* apply button  */}
            <div>
                {
                    user?.role !== "employer" && <button onClick={() => applyJob(id)} className='bg-blue-700 py-2 px-16 mt-4 text-white rounded'>Apply</button>
                }
            </div>

            <div>
                <h5 className='text-xl mt-5 font-semibold'>Job overview</h5>
            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit laborum, corrupti voluptas rerum obcaecati sunt dolorem temporibus dolorum quod ipsum reprehenderit quia a ad vel quis illo saepe ea debitis cupiditate repudiandae dicta voluptates. Ab nesciunt labore, obcaecati dolores reprehenderit harum corrupti illo laborum, nulla eaque aliquid sunt quod repellat exercitationem hic cumque iusto perferendis. Quaerat numquam pariatur facilis harum illum, consequatur corporis, nobis ab consectetur odio ea beatae iste perspiciatis iure sit at! Unde, pariatur dicta! Dolores commodi impedit tempore, nihil iure, quod culpa obcaecati aliquid eligendi sint expedita eos sunt facere eaque recusandae laboriosam dolorem molestiae quis repellendus.</p>
            </div>
            <h5 className='text-2xl font-bold mt-5'>Skills</h5>
            <ul className='text-xl font-medium'>
                {
                skills && skills.map((skill: "") => <li className='list-disc ml-5'>{skill}</li>)
                }
            </ul>

            <h5 className='text-2xl font-bold mt-5'>Requirements</h5>
            <ul className='text-xl font-medium'>
                {
                requirements && requirements.map((requirement: "") => <li className='list-disc ml-5'>{requirement}</li>)
                }
            </ul>

            <h5 className='text-2xl font-semibold mt-5'>Responsibilities</h5>
            <ul className='text-xl mb-5 font-medium'>
                {
                responsibilities && responsibilities.map((responsibility: "") => <li className='list-disc ml-5'>{responsibility}</li>)
                }
            </ul>
        </div>
    );
};

export default JobDetails;