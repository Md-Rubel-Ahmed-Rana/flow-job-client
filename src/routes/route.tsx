import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Admins from '../Pages/Dashboard/Admins';
import AllUsers from '../Pages/Dashboard/AllUsers';
import Candidates from '../Pages/Dashboard/Candidates';
import Recruiters from '../Pages/Dashboard/Recruiters';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
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
            },
            {
                path: "/dashboard/admins",
                element: <Admins />
            },
            {
                path: "/dashboard/recruiters",
                element: <Recruiters/>
            },
            {
                path: "/dashboard/candidates",
                element: <Candidates/>
            }
        ]
    }
])

export default router;