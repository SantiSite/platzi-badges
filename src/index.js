// const element = document.createElement('h1');
// element.innerText = 'Hello Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

import App from './components/App';

import './global.css';

// const element = <h1>Hello Platzi Badges</h1>
// const element = React.createElement('a', { href: 'http://Platzi.com'}, 'Platzi');

// let name = 'Santiago';
// const element = React.createElement('h1', {color: 'aqua'}, `Hello, My name is ${name}`);

// const city = 'Manizales';
// const ages = () => (20 + 2);
// const element = <h1>Hello, I am from {city} and I am {ages()} years old.</h1>;

// const jsx = (
//     <div>
//         <h1>Soy Ingeniero Industrial.</h1>
//         <p>Apasionado por la programación</p>
//     </div>
// )

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Soy Ingeniero Industrial.'),
//     React.createElement('p', {}, 'Apasionado por la programación.')
// )

const container = document.getElementById('app');

// ReactDOM.render(_que, _en-donde);
ReactDOM.render(<App />, container);
