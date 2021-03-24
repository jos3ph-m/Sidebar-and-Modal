import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="closed-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
