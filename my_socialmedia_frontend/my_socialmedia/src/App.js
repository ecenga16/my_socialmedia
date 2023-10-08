import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './components';
import Home from './container/Home';

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App;
