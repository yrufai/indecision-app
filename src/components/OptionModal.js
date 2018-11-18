import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app")
const OptionModal = (props)=> (
   <Modal 
    isOpen={ !!props.selectedOption}
    onRequestClose={props.handleClearModal}
    contentLabel="selected option"
    closeTimeoutMS = {200}
    className="modal"
   >
        <h3 className="modal__title" >selected option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption} </p>}
        <button className="button" onClick={props.handleClearModal}> okay</button>
   </Modal>
)

export default OptionModal;