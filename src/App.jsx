import React from 'react';
import { Footer, Navbar } from './components';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
            {/* <Footer /> */}
        </Router>
    )
}

export default App;