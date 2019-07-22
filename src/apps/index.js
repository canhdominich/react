
import React, { Component } from 'react';
import AppRouter from '../route';
import DemoProp from './pages/Prop/demo_props';
// import Api from './pages/Api/fetching_data';
import Api from './pages/Api/fetching_wiki';

const list = [
    {
        title : 'ReactJs - Day 1',
        teach : 'Mr A'
    },
    {
        title : 'ReactJs - Day 2',
        teach : 'Mr B'
    },
    {
        title : 'ReactJs - Day 3',
        teach : 'Mr C'
    }
];

class App extends Component {
    
    render() {
        return (
            <div>
               {/* <AppRouter/> */}
               {/* <DemoProp title = {list} /> */}
               <Api/>
            </div>
        );
    }
}

export default App;

