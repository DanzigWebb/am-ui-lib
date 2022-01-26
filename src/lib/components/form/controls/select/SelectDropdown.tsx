import { ReactNode, useContext, useEffect } from 'react';
import { MenuContext } from '../../../menu';

type SelectDropdownProps<T = any> = {
    children: ReactNode;
    width?: number | string;
    onSelect?: (value: T) => void;
}

export const SelectDropdown = (props: SelectDropdownProps) => {
    const {
        children,
        width,
        onSelect = () => {}
    } = props;

    const context = useContext(MenuContext);
    context.emitter?.subscribe('onSelect', onSelect);

    useEffect(() => {
        return () => {
            context.emitter?.unsubscribe('onSelect', onSelect);
        }
    }, []);

    return (
        <div style={{width}}>
            {children}
        </div>
    );
};