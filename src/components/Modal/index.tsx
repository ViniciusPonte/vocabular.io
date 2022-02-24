import ReactModal from "react-modal";
import { useModal } from "../../contexts/modal";

export function Modal(){
    const { isVisible, setIsVisible, setModalContent, modalContent } = useModal();

    function handleClose(){
        setIsVisible(false);
        setModalContent(null);
    }

    return (
        <ReactModal 
            isOpen={isVisible} 
            onRequestClose={handleClose}
            shouldCloseOnEsc 
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(68, 68, 68, 0.85)',
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                content: {
                  inset: 'auto',
                  border: 0,
                  background: 'var(--gray-700)',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.8)'
                }
              }}
        >
            <p>{modalContent}</p>
        </ReactModal>
    )
}