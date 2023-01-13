import React from 'react';

const AllUsers = () => {
    const users = [
        {id: 1, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 2, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 3, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 4, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 5, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 6, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "candidate", total: "6"},
        {id: 7, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 8, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 9, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 10, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 11, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 12, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 13, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
        {id: 14, name: "Mohin", email: "mohin@gmail.com", phone: "01786263715", role: "recruiter", total: "10"},
    ]
    return (
        <div className='w-full'>
            <h3 className='text-3xl text-center font-bold mb-3'>Here are all users</h3>
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
                        users && users.map((user, index) => {
                            const {name, email, phone, role, total} = user;
                            return (
                                <tr className='flex justify-start p-2 border hover:text-white hover:bg-blue-500'>
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

export default AllUsers;