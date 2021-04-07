import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import * as App from '../apps/App';

export default function AppRouter () {
    return (
        <Router>
                <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        component={App.App1}
                    />
                </Switch>
        </Router>
    );
}