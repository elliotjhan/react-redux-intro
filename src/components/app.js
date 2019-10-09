import React from 'react';
import '../assets/css/app.scss';
import Clock from './clock';
import ChangeColor from './change_color';
import Products from './products';

const App = () => (
    <div className="app">
        <div className="welcome">
            <Clock />
            <div className="center">
                <ChangeColor className="mx" color="red" text="red"/>
                <ChangeColor className="mx" color="blue" text="blue"/>
                <ChangeColor className="mx" color="green" text="green"/>
            </div>
            <Products />
        </div>
    </div>
);

export default App;
