import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='sticky top-0 bg-slate-300 h-full px-10 py-5'>
            <ul className='flex flex-col gap-3'>
                <li className='font-bold  p-1 rounded text-xl'><Link to="/dashboard">All Users</Link></li>
                <li className='font-bold  p-1 rounded text-xl'><Link to="/dashboard/admins">Admins</Link></li>
                <li className='font-bold  p-1 rounded text-xl'><Link to="/dashboard/recruiters">Recruiters</Link></li>
                <li className='font-bold  p-1 rounded text-xl'><Link to="/dashboard/candidates">Candidates</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;