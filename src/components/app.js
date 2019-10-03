import React from 'react';
import '../assets/css/app.scss';
import Clock from './clock';
import ChangeColor from './change_color';

const App = () => (
    <div className="app">
        <div className="welcome">
            <Clock />
            <div className="center">
                <ChangeColor/>
                <ChangeColor/>
                <ChangeColor/>
            </div>
        </div>
    </div>
);

export default App;
