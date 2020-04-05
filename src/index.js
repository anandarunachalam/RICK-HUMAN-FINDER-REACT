import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContainerBlock from './container-block';

class App extends React.Component {
    render() {
        return (
            <div>
                



               
                <ContainerBlock />
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);