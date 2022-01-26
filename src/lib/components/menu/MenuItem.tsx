import React, { ReactNode, useContext } from 'react';
import { MenuContext } from './MenuContext';


interface MenuItemProps<T = any> {
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => any;
    closeOnClick?: boolean;
    value?: T;
}

export const MenuItem = (props: MenuItemProps) => {

    const {
        children = '',
        onClick = () => {},
        closeOnClick = true,
        value,
    } = props;

    const context = useContext(MenuContext);

    function close(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        onClick(e);

        if (closeOnClick) {
            context.onSelectItem(value);
        }
    }

    return (
        <li onClick={close}>
            <a>{children}</a>
        </li>
    );
};