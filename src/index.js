import React from 'react';
import ReactDOM from 'react-dom'

const elemnt = React.createElement(
    'div', { id: 'main', className: 'container' },
    "hello mortzasa !"

)


ReactDOM.render(elemnt, document.getElementById('root'))