import 'babel-polyfill';

import React, { propTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from '../shared/dog';

const dogBark = new Dog('Browser Toby').bark();

const App = props => (
    <div>
        The dog says: {props.message}
    </div>    
);

App.propTypes = {
    message: propTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
