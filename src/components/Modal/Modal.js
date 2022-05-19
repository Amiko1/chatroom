import ReactDom from "react-dom";
import CloseIcon from "../icons/CloseIcon";
const MODAL_STYLES = {
    width: '90%',
    borderRadius: '8px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFF',
    zIndex: 1000,
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#E9E6E6',
    opacity: 0.3,
    zIndex: 1
} 

const BUTTON_STYLES = {
    position: "absolute",
    top: 15,
    right: 15,
}


export default function Modal({open, children, onClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} onClick={onClose} ></div>
         <div style={MODAL_STYLES}>
            <button style={BUTTON_STYLES} onClick={onClose}>
                <CloseIcon />
            </button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    );
}