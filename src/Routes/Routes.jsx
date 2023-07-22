import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admissoin/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'mycollege',
                element: <MyCollege></MyCollege>
            }
        ]
    },
]);