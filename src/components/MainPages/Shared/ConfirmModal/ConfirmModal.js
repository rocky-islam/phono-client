import React from 'react';

const ConfirmModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
  successButtonName,
}) => {
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="confirm-modal" className="btn">
          open modal
        </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirm-modal"
              className="btn"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;