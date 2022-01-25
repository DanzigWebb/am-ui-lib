import { ReactNode, useEffect, useState } from 'react';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';
import { SlideDownAnimation } from '../../animations/SlideDownAnimation';

export interface ModalContainerProps {
    children: ReactNode;
    onClose: () => void;
    context: Modal;
}

// Todo: добавить Fade анимацию на оверлей
export const ModalContainer = ({children, onClose}: ModalContainerProps) => {
    const [boxShow, setBoxShow] = useState(false);

    const duration = 200;

    useEffect(() => {
        setTimeout(() => {
            setBoxShow(true);
        });
    }, []);

    function onStartClose() {
        setBoxShow(false);

        setTimeout(() => {
            onClose();
        }, duration);
    }

    return (
        <ModalContext.Provider value={{onClose: onStartClose}}>
            <div className="modal modal-open" onClick={onStartClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <SlideDownAnimation inProp={boxShow} duration={duration}>
                        {children}
                    </SlideDownAnimation>
                </div>
            </div>
        </ModalContext.Provider>
    );
};
