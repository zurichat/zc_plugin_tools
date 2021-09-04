import React from 'react'
import styles from "../GoogleDrive.module.css";


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
        alert('A comment was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label className={styles.name_style}>
                        Why you want to Add Google Drive to Zuri Plugin
                    </label>
                    <input type="text"
                        value={this.state.value} onChange={this.handleChange}
                        className={styles.input_section}
                        placeholder='Enter a comment....' />
                    <div>
                        <input type="submit" value="Submit" className={styles.submit_button} />
                    </div>

                </form>
            </div>
        );
    }
}

export default NameForm