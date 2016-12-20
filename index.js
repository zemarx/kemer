const React = require('react');
const ReactDOM = require('react-dom');



const Hello = React.createClass({
    render: function () {
        return (
            <div id="main">
                <div style={navStyle}>Mybe navigation?</div>
                <div>Maybe some info</div>
            </div>
        );
    }
});

const navStyle = {
    width: "100%",
    height: "100px",
    border: "1px solid black"
};

ReactDOM.render(< Hello/>, document.getElementById('app'));