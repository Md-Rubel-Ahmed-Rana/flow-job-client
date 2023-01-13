import React from 'react';

const Recruiters = () => {
    
    const recruiters = [
        {id: 1, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"},
        {id: 2, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"},
        {id: 3, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"},
        {id: 4, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"},
        {id: 5, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"},
        {id: 6, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Recruiter", total: "6"}
    ]

    return (
        <div className='w-full'>
            <div className='flex justify-between py-1'>
                <input className='p-1 w-full' type="text" name="name" id="name" placeholder='Enter name to search' />
                <button className='bg-blue-700 ml-2 px-10 text-white rounded'>Search</button>
            </div>
            <table>
                <thead className='flex justify-start bg-blue-700 text-white p-2 rounded'>
                    <th className='w-10 text-center'></th>
                    <th className='w-52 text-center'>Name</th>
                    <th className='w-52 text-center'>Email</th>
                    <th className='w-52 text-center'>Phone</th>
                    <th className='w-52 text-center'>Role</th>
                    <th className='w-52 text-center'>Total Job</th>
                </thead>
                <tbody>
                    {
                        recruiters && recruiters.map((recruiter, index) => {
                            const {name, email, phone, role, total} = recruiter;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center '>{index + 1}</td>
                                    <td className='w-52 text-center '>{name}</td>
                                    <td className='w-52 text-center '>{email}</td>
                                    <td className='w-52 text-center '>{phone}</td>
                                    <td className='w-52 text-center '>{role}</td>
                                    <td className='w-52 text-center '>{total}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Recruiters;