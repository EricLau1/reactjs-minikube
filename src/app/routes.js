import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Owners from './pages/Owners';
import Wallets from './pages/Wallets';
import Logs from './pages/Logs';

const routes = [
    {
        key: 0,
        path: '/',
        component: Owners,
        exact: true,
    },
    {
        key: 1,
        path:'/wallets',
        component: Wallets,
        exact: true
    },
    {
        key: 2,
        path: '/logs',
        component: Logs,
        exact: true,
    },
];

const Routes = () => (
    <Router>
        <Switch>
            {
                routes.map(route => <Route {...route} />)
            }
        </Switch>
    </Router>
);

export default Routes;

