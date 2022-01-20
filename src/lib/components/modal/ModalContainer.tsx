import { ReactNode } from 'react';

export interface ModalContainerProps {
    children: ReactNode;
    onClose: () => void;
}

export const ModalContainer = ({children, onClose}: ModalContainerProps) => (
    <div className="modal modal-open" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
)