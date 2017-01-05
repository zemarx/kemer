import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

import AppContainer from './appContainer'

var rootElement = document.getElementById('app');


ReactDOM.render(<AppContainer />, rootElement);


if (module.hot) {
    module.hot.accept('./appContainer', function () {
        var NextApp = require('./appContainer');

        ReactDOM.render(<NextApp />, rootElement)
    })
}