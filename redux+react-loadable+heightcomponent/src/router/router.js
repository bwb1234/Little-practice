import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import loadable from '../utils/loadable'

const Home = loadable(()=>import('../pages/home'))

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Home}/>
    </BrowserRouter>
);

export default Routes

