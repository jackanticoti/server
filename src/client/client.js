// this is usually called index.js as well
// Startup oint for client side application

console.log("Hi there")

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// there is already html content inside the root we are just adding JS code to it: this is called Hydration!

ReactDOM.hydrate(<Home/>, document.querySelector('#root'));

