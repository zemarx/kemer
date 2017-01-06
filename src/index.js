import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppContainer from './appContainer'

const rootElement = document.getElementById('app');


ReactDOM.render(<AppContainer />, rootElement);

if (module.hot) {
    module.hot.accept('./appContainer', function () {
        var NextApp = require('./appContainer');

        ReactDOM.render(<NextApp />, rootElement)
    })
}
