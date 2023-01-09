import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h2>From Dashboard layout</h2>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;