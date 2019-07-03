import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../Home';
import { ROUTES } from '../../contants';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <Fragment>
                    <Router>
                        <Route path={ROUTES.Home} component={HomePage} />
                        <Route path={ROUTES.About} component={About} />
                        <Route path={ROUTES.Contact} component={Contact} />
                    </Router>
                </Fragment>
            </ThemeProvider>
        );
    }
};