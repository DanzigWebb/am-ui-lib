import React, { ReactNode, useContext } from 'react';
import { MenuContext } from './MenuContext';


interface MenuItemProps {
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => any;
    closeOnClick?: boolean;
}

export const MenuItem = (
    {
        children = '',
        onClick = () => {},
        closeOnClick = true
    }: MenuItemProps) => {

    const context = useContext(MenuContext);

    function close(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        onClick(e);

        if (closeOnClick) {
            context.onClose();
        }
    }

    return (
        <li onClick={close}>
            <a>{children}</a>
        </li>
    );
};