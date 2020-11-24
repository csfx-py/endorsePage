import React from 'react';
import { Navbar } from './components';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <GlobalStyles />
        </Router>
    )
}

export default App;