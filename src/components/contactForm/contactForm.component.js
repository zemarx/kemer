import * as React from 'react';
import 'whatwg-fetch';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();

        console.log(JSON.stringify(this.state, null, 2));
    
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        })

        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    handleNameChange (event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange (event) {
        this.setState({
            email: event.target.value
        });
    }

    handleMessageChange (event) {
        this.setState({
            message: event.target.value
        });
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nimi:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>

                <label>
                    Sähköposti:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>

                <label>
                    Viesti:
                    <textarea value={this.state.message} name="message" onChange={this.handleMessageChange} />
                </label>

                <input type="submit" value="Lähetä" />
            </form>
        );
    }
}
