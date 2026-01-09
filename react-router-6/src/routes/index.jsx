import About from "../components/About";
import Home from "../components/Home";
import { Navigate } from "react-router-dom";
import Message from "../components/Home/Message";
import News from "../components/Home/News";
import Detail from "../components/Detail";

export default [
    { path: '/about', element: <About /> },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />,
                children: [
                    { path: 'detail/:id/:name/:content', element: <Detail /> }
                ]
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    { path: 'detail/:id/:name/:content', element: <Detail /> }
                ]
            }
        ]
    },
    { path: '/', element: <Navigate to='/home' /> }
]