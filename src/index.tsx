import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './content/RootRouter'
import * as serviceWorker from './serviceWorker'
import './styles/style.scss'
import Amplify from 'aws-amplify';
import config from './config'

Amplify.configure(config);
ReactDOM.render(
    <React.StrictMode>
        <RootRouter />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
