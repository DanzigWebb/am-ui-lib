import { ReactNode, useState } from 'react';
import { MenuContext } from './MenuContext';
import { Menu } from './Menu';
import { usePopper } from 'react-popper';

interface MenuContainerProps {
    children: ReactNode;
    reference: Element;
    onClose: () => void;
    context: Menu;
}

export const MenuContainer = ({children, onClose, reference}: MenuContainerProps) => {

    const [popperEl, setPopperEl] = useState<HTMLUListElement | null>(null);

    const {styles, attributes} = usePopper(reference, popperEl);

    return (
        <MenuContext.Provider value={{onClose}}>
            <div className="menu-container" onClick={onClose}>
                <ul
                    ref={setPopperEl}
                    style={styles.popper}
                    {...attributes.popper}
                    onClick={e => e.stopPropagation()}
                    className="menu bg-base-300 drop-shadow-2xl rounded-box"
                >
                    {children}
                </ul>
            </div>
        </MenuContext.Provider>
    );
};