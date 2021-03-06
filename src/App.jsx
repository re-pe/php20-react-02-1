import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
            <div className="App container w-50">
                <Header />,
                <Main />
            </div>
        );
    }
}

export default App
