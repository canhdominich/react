import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/apps/pages/Home/home';
import About from '../src/apps/pages/About/about';
import Contact from '../src/apps/pages/Contact/contact';
import Search from '../src/apps/pages/Search/search';
import Counter from '../src/apps/pages/State/local_state';
import CounterComponent from '../src/apps/pages/State/stateless_components';
import Interact from '../src/apps/pages/Form/interact';

const ROUTES = {
    Home: '/home',
    About: '/about',
    Contact: '/contact',
    Search: '/search',
    Counter : '/counter',
    CounterComponent : '/counterpresenter',
    Interact : '/interact',
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
                <Route path={ROUTES.CounterComponent} component={CounterComponent} />
                <Route path={ROUTES.Interact} component={Interact} />
            </Router>
        );
    }
}

export default AppRouter;
