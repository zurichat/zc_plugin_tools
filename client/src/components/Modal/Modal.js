import React from "react";
import './modal.css'
import { ImCancelCircle } from 'react-icons/im';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <ImCancelCircle style={{
                    color: 'white',
                    float: 'right',
                    width: 40,
                    marginTop: 20
                }}
                    onClick={handleClose} />
                {children}

            </section>
        </div>
    );
};

export default Modal