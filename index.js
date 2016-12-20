const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello friend!</h1>
                <p>Come, sit, eat good pizza!</p>
            </div>
        );
    }
});

ReactDOM.render(< Hello/>, document.getElementById('app'));