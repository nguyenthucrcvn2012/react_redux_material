import React from 'react';
import * as path from './config/path';
import { routes } from './config/routes';
import { checkLogin } from './helper';
import Layout from './components/Layout'

import { 
    Routes,
    Route,
    Navigate,
    Outlet 
} from 'react-router-dom';
const Login = React.lazy(() => import('./pages/Login'));

const PrivateRoute = (route) =>{
    let loggedIn = checkLogin();
    return (
        <>
            {loggedIn ? <Outlet  /> : <Navigate to={path.LOGIN} />};
        </>
    )
}

const PublicRoute = (route) => {
    let loggedIn = false;
    return (
        <>
            {loggedIn ?  <Navigate to={path.TOP}/> : <Outlet  /> };
        </>
    )

}

export default (
    <Routes>
        
        <Route exact element={<PublicRoute />}>
            <Route element={<Layout />}>
                <Route path={path.LOGIN} element={<Login />} />
            </Route>
        </Route>
        <Route exact element={<PrivateRoute />}>
            {routes.map( (route, i) => (
                <Route element={<Layout />}>
                    <Route key={i} path={route.path} element={<route.component />} />
                </Route>
            ))}
        </Route>
    </Routes>
)