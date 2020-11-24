import React from 'react';
import { Navbar } from './components';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
        </Router>
    )
}

export default App;