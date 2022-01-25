import { ReactNode, useEffect, useState } from 'react';
import { MenuContext } from './MenuContext';
import { Menu } from './Menu';
import './Menu.css';
import { usePopper } from 'react-popper';
import { SlideDownAnimation } from '../../animations/SlideDownAnimation';

interface MenuContainerProps {
    children: ReactNode;
    reference: Element;
    onClose: () => void;
    context: Menu;
}

export const MenuContainer = ({children, onClose, reference}: MenuContainerProps) => {

    const duration = 200;

    const [show, setShow] = useState(false);

    const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);
    const {styles, attributes} = usePopper(reference, popperEl);

    useEffect(() => {
        setShow(true);
    }, []);

    function onStartClose() {
        setShow(false);
        setTimeout(() => {
            onClose();
        }, duration);
    }

    return (
        <MenuContext.Provider value={{onClose: onStartClose}}>
            <div className="menu-container" onClick={onStartClose}>
                <div
                    ref={setPopperEl}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <SlideDownAnimation inProp={show} duration={duration}>
                        <ul
                            onClick={e => e.stopPropagation()}
                            className="menu bg-base-300 drop-shadow-2xl rounded-box"
                        >
                            {children}
                        </ul>
                    </SlideDownAnimation>
                </div>
            </div>
        </MenuContext.Provider>
    );
};