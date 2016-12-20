const React = require('react');
const ReactDOM = require('react-dom');



const Hello = React.createClass({
    render: function () {
        return (
            <div id="main">
                <nav>Mybe navigation?</nav>
                <div>Maybe some info</div>
            </div>
        );
    }
});

ReactDOM.render(< Hello/>, document.getElementById('app'));