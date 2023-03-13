import { useNavigate } from "react-router-dom";

const JobTable = ({jobs}: any) => {
    const navigate = useNavigate();
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
                    <th className='w-44 py-2 text-center'>Type</th>
                    <th className='w-44 py-2 text-center'>Salary</th>
                    <th className='w-44 py-2 text-center'>More</th>
                </thead>
                <tbody>
                    {
                        jobs && jobs.map((job: {}, index: number) => {
                            const {_id, title, location, jobType, salary}: any = job;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:rounded hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center py-2'>{index + 1}</td>
                                    <td className='w-44 text-center py-2'>{title}</td>
                                    <td className='w-44 text-center py-2'>{location}</td>
                                    <td className='w-44 text-center py-2'>{jobType}</td>
                                    <td className='w-44 text-center py-2'>{salary}</td>
                                    <td className='w-44 text-center'><button onClick={() => navigate(`/jobs/${_id}`)} className='px-2 py-1 rounded-lg text-white hover:bg-white hover:text-black bg-green-700'>Details</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default JobTable;