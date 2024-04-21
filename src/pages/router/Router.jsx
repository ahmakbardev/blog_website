import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Home from '../home/Home'
import Login from '../auth/Login'
import Detail from '../blog/Detail'
import Create from '../blog/Create'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/detail",
        element: <Detail />
    },
    {
        path: "/create-blog",
        element: <Create />
    },
])

export default Router
