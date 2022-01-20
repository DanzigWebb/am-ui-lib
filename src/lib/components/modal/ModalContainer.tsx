import { ReactNode } from 'react';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';

export interface ModalContainerProps {
    children: ReactNode;
    onClose: () => void;
    context: Modal
}

export const ModalContainer = ({children, onClose}: ModalContainerProps) => {
    return (
        <ModalContext.Provider value={{onClose}}>
            <div className="modal modal-open" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </ModalContext.Provider>
    );
}
