import React from 'react';

const MyPosts = () => {
    const jobPosts = [
        {id: 1, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 2, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 3, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 4, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 5, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 6, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 7, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 8, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 9, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
        {id: 10, title: "Frontend Developer", salary: "35,000", Work: "Full Time", Location: "Remote/On site"},
    ]
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
                        jobPosts && jobPosts.map((post, index) => {
                            const {title, Location, Work, salary} = post;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center py-2'>{index + 1}</td>
                                    <td className='w-44 text-center py-2'>{title}</td>
                                    <td className='w-44 text-center py-2'>{Location}</td>
                                    <td className='w-44 text-center py-2'>{Work}</td>
                                    <td className='w-44 text-center py-2'>{salary}</td>
                                    <td className='w-44 text-center'><button className='bg-red-700 px-2 py-1 rounded-lg text-white'>Delete</button></td>
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