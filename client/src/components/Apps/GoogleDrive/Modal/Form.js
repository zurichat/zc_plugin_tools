import React from 'react'
import { ThemeProvider } from 'react-bootstrap';
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
                        Why you want to Add Google Drive to Zuri Plugin Tools
                    </label>
                    <textarea id="w3review" placeholder="Enter a comment.."
                        name="w3review" rows="4" cols="50"
                        className={styles.input_section}
                        value={this.state.value}
                        onChange={this.handleChange}></textarea>
                    <div>
                        <input type="submit" value="Submit" className={styles.submit_button} />
                    </div>

                </form>
            </div>
        );
    }
}

export default NameForm