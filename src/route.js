import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/apps/pages/Home/home';
import About from '../src/apps/pages/About/about';
import Contact from '../src/apps/pages/Contact/contact';
import Search from '../src/apps/pages/Search/search';
import Counter from '../src/apps/pages/State/local_state';

const ROUTES = {
    Home: '/home',
    About: '/about',
    Contact: '/contact',
    Search: '/search',
    Counter : '/counter',
}

class AppRouter extends Component {

    render() {
        return (
            <Router>
                <Route path='/' component={Home} />
                <Route path={ROUTES.Home} component={Home} />
                <Route path={ROUTES.About} component={About} />
                <Route path={ROUTES.Contact} component={Contact} />
                <Route path={ROUTES.Search} component={Search} />
                <Route path={ROUTES.Counter} component={Counter} />
            </Router>
        );
    }
}

export default AppRouter;
