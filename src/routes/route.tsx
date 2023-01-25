import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Admins from '../Pages/Dashboard/Admin/Admins';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers';
import Candidates from '../Pages/Dashboard/Admin/Candidates';
import Recruiters from '../Pages/Dashboard/Admin/Recruiters';
import MyJobs from '../Pages/Dashboard/Candidate/MyJobs';
import AddJob from '../Pages/Dashboard/Recruiter/AddJob';
import MyPosts from '../Pages/Dashboard/Recruiter/MyPosts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TestPage from '../Pages/TestPage';

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
            },
            {
                path: "/test",
                element: <TestPage />
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
            },
            {
                path: "/dashboard/myposts",
                element: <MyPosts/>
            },
            {
                path: "/dashboard/myjobs",
                element: <MyJobs/>
            },
            {
                path: "/dashboard/newjob",
                element: <AddJob/>
            }
        ]
    }
])

export default router;