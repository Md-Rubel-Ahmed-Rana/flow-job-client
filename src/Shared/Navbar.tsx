import React from 'react';
import logo from "../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-200 px-10 py-2 items-center'>
            <div className='flex gap-3 items-center'>
                <img className='h-16 w-16 rounded-full' src={logo} alt="" />
                <h3 className="text-3xl text-green-600 font-extrabold">Flow Jobs</h3>
            </div>
            <div>
                <ul className='flex gap-5 text-lg font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Jobs</Link></li>
                    <li><Link to="/">Friends</Link></li>
                    <li><Link to="/">Message</Link></li>
                    <li><Link to="/">Courses</Link></li>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </div>
            <div>
                <FaUserAlt />
            </div>
        </nav>
    );
};

export default Navbar;