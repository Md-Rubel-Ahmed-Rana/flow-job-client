import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateJobPostMutation } from '../../../features/jobs/jobApi';

const AddJob = () => {
    const navigate = useNavigate();
    const { candidatesReducer: {user} } = useSelector((state) => state);

    const { register, handleSubmit, control, reset } = useForm();
    const {fields: skillsFields, append: addSkills, remove: removeSkill} = useFieldArray({control, name: "skills"});
    const { fields: reqFields, append: addRequirements, remove: removeRequirement } = useFieldArray({control, name: "requirements"});
    const { fields: resFields, append: addResponsibility, remove: removeResponsibility } = useFieldArray({control, name: "responsibilities"});

    const [postJob] = useCreateJobPostMutation();
    const onSubmit = async(newJob) => {
        const { data } = await postJob(newJob);
        const { success, message } = data || {};
        if (success){
            toast.success(message);
            reset();
            navigate("/dashboard/myposts")
        }
    };


    return (
        <div>
        <h3 className="text-4xl text-center font-bold">Add New Job</h3>
        <form onSubmit={handleSubmit(onSubmit)}  className='w-full p-10'>
            <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                <label htmlFor="title">
                <span className="text-xl my-2 font-semibold"> Job Title</span>
                        <input ref={register} className='ml-2 p-2 text-xl' {...register("title", { required: true })} />
                    </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Location</span>
                        <input className='ml-2 p-2 text-xl' {...register("location", { required: true })} />
                </label>
                </div>
            </div>

            <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                    <span className="text-xl my-2 mr-2 font-semibold">Job Place:</span>
                    <select {...register("jobPlace", { required: true })} className='p-2 text-xl' name="jobPlace" id="jobPlace">
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote/Onsite">Remote/Onsite</option>
                </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Employer email</span>
                        <input readOnly defaultValue={user?.email} className='ml-2 p-2 text-xl' {...register("employerEmail", { required: true })} />
                </label>
                </div>
            </div>

            <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Official email</span>
                        <input className='ml-2 p-2 text-xl' {...register("officialEmail", { required: true })} />
                </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="website">
                        <span className="text-xl my-2 font-semibold">Website</span>
                        <input className='ml-2 p-2 text-xl' {...register("website", { required: true })} />
                </label>
                </div>
            </div>

                <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Salary Range</span>
                        <input className='ml-2 p-2 text-xl' {...register("salary", { required: true })} />
                </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Working Day/week</span>
                        <input className='ml-2 p-2 text-xl' {...register("workDay", { required: true })} /> 
                </label>
                </div>
            </div>

            <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Working Time</span>
                        <input className='ml-2 p-2 text-xl' {...register("workTime", { required: true })} /> 
                </label>
                </div>
                <div className='mb-3'>
                    <span className="text-xl my-2 mr-2 font-semibold">Job Type:</span>
                    <select {...register("jobType", { required: true })} className='p-2 text-xl' name="jobType" id="jobType">
                        <option selected value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Intern">Intern</option>
                    </select>
                </div>
            </div>


            <div className='flex justify-between gap-40'>
                <div className='mb-3'>
                    <label htmlFor="Location">
                        <span className="text-xl my-2 font-semibold">Company Name</span>
                        <input className='ml-2 p-2 text-xl' {...register("companyName", { required: true })} /> 
                </label>
                </div>
                <div className='mb-3'>
                    <span className="text-xl my-2 mr-2 font-semibold">Company Size</span>
                    <select {...register("companySize", { required: true })} className='p-2 text-xl' name="companySize" id="companySize">
                        <option selected value="Under 10">Under 10</option>
                        <option value="10-50">10-50</option>
                        <option value="50-100">50-100</option>
                        <option value="Above 100">Above 100</option>
                    </select>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Job overview</h2>
                <textarea className="w-full p-4" {...register("overview", { required: true })} name="overview" id="overview" cols="30" rows="5"></textarea>
            </div>

            <div className="my-5">
                <div>
                    <h2 className="text-xl my-2 font-semibold">Required Skills:</h2>
                    {skillsFields?.map((item, index) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 text-xl'
                                    type='text'
                                    {...register(`skills[${index}]`)}
                                />
                                <span onClick={() => removeSkill(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addSkills("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Skill</span>
            </div>

            <div className="my-5">
                <div>
                    <h2 className="text-xl my-2 font-semibold">Requirements:</h2>
                    {reqFields?.map((item, index) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 text-xl'
                                    type='text'
                                    {...register(`requirements[${index}]`)}
                                />
                                <span onClick={() => removeRequirement(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addRequirements("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Requirement</span>
            </div>
            <div className="my-5">
                <div>
                    <h2 className="text-xl my-2 font-semibold">Responsibilities:</h2>
                    {resFields?.map((item, index) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 text-xl'
                                    type='text'
                                    {...register(`responsibilities[${index}]`)}
                                />
                                <span onClick={() => removeResponsibility(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addResponsibility("")} className="py-2 cursor-pointer px-5 hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Responsibility</span>
            </div>
            <button className='bg-blue-600 px-10 py-3 rounded w-full text-white font-bold' type="submit">Add Job</button>
        </form>
    </div>
    );
};

export default AddJob;