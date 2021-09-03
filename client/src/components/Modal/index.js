import React, { Component } from "react";
import Modal from './Modal'
import '../Modal/modal.css'
import NameForm from "../AddCommentForm";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1></h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <NameForm />
                </Modal>
                <button type="button" className="open-button" onClick={this.showModal}>
                    Open Modal
                </button>
            </main>
        );
    }
}

export default Dashboard