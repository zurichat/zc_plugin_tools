import React, { useRef, useEffect, useCallback } from "react";
// import { func } from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../GoogleDrive.module.css";
import NameForm from "./Form";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className={styles.modal_background}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={styles.modal_wrapper} showModal={showModal}>
            <NameForm />
            <AiOutlineCloseCircle
              className={styles.close_button}
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

// Modal.propTypes = {
//     showModal: func,
//     setShowModal: func,
// };

export default Modal;
