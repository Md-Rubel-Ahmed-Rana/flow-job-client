import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import AllUsers from '../Pages/Dashboard/AllUsers';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <AllUsers />
            }
        ]
    }
])

export default router;