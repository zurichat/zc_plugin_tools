import React from 'react'

import '../Modal/modal.css'


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A Comment was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="formName">
                    Why do you want to Add GoogleDrive to Zuri Plugin Tools
                </label>
                <input className='input-space'
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Enter a Comment...' />
                <input className='submit-button' type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm