import React from 'react';


const modalstyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "1000",
    /*
    width: "fit-content",
    height: "fit-content",
    maxWidth: "90vh",
    maxHeight:"90vh",
    */
    transform: "translate(-50%, -50%)"

}


function Modal({ children, open, onClose }) {

    if (!open) return null;

    return (
        <div style={modalstyle}>
            {children}
        </div>

    )
}
export default Modal;



/*
Modal window component
Creates an overlay that can be filled with content
Default state is false(turned off)
*/