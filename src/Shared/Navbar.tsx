import React, {useContext} from 'react';
import logo from "../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
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
                    {
                        user ? <> 
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li>Logout</li> 
                                </>
                             : 
                               <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                    
                </ul>
            </div>
            <div>
                {
                    user?.photoURL ? <img className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" />
                                    : <FaUserAlt title='Profile' />
                }
                
            </div>
        </nav>
    );
};

export default Navbar;