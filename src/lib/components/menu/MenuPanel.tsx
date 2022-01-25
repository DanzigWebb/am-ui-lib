import { ReactNode, useContext } from 'react';
import { MenuContext } from './MenuContext';


export const MenuItem = ({children}: { children: ReactNode }) => {

    const context = useContext(MenuContext);

    function close() {
        context.onClose();
    }

    return (
        <li onClick={close}>
            <a>{children}</a>
        </li>
    );
};