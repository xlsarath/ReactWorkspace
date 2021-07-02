import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div',null,'hello-world')

console.log(element)

ReactDOM.render(
    element,document.getElementById('root')
)