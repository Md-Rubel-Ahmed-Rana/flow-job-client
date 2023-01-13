import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='flex p-10 gap-10'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;