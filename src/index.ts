
import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

import 'antd/dist/antd.css';

const root = document.createElement('div')
document.body.appendChild(root)

const app = React.createElement(App)

render(app, root) 

