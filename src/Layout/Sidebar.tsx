import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='sticky top-0 bg-slate-300 h-full px-10 py-5'>
            <ul className='flex flex-col gap-3'>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard">All Users</Link></li>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/admins">Admins</Link></li>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/recruiters">Recruiters</Link></li>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/candidates">Candidates</Link></li>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/myposts">My Posts</Link></li>
                <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/newjob">Add Job</Link></li>
                <li className='font-bold hover:underline p-1 rounded text-xl'><Link to="/dashboard/myjobs">My Jobs</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;