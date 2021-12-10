import React from 'react';

import {useRoutes} from 'react-router';

import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/about/About";
import Error404 from "./component/error/Error404";
import Me from "./component/about/Me";
import Location from "./component/about/Location";

import Join from './component/user/Join';
import Login from './component/user/Login';
import Settings from './component/user/Settings';

import './assets/scss/App.scss'

export default function App() {
    return useRoutes([
        {path: '/', element: <Main />},
        {path: 'gallery', element: <Gallery />},
        {path: 'guestbook', element: <Guestbook />},
        {
            path: 'about', 
            element: <About />,
            children: [{
                path: 'me', 
                element: <Me />
            }, {
                path: 'location', 
                element: <Location />
            }]
        },
        {path: 'user/join', element: <Join />},
        {path: 'user/Login', element: <Login />},
        {path: 'user/settings', element: <Settings />},
        {path: '*', element: <Error404 />}
    ]);

    /* 
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='guestbook' element={<Guestbook />}/>
                <Route path='about' element={<About />}>
                    <Route path='me' element={<Me />}/>
                    <Route path='location' element={<Location />}/>
                </Route>
                <Route path='user/join' element={<Join />}/>
                <Route path='user/Login' element={<Login />}/>
                <Route path='user/Settings' element={<Settings />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </Router>
    );
     */
}