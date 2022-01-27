import { Menu } from '../../../menu';
import { SelectDropdown } from './SelectDropdown';
import { ReactNode, useState } from 'react';

type SelectProps<T = any> = {
    children: ReactNode;
    placeholder?: string;
    onSearch?: (v: string) => void;
}

export const Select = (props: SelectProps) => {

    const [value, setValue] = useState<any>(null);
    const {children, placeholder = '', onSearch = () => {}} = props;

    function onSelect(v: any) {
        setValue(v || value);
    }

    function openSelectMenu(el: Element) {
        const dropdown = (
            <SelectDropdown
                width={el.clientWidth}
                onSelect={onSelect}
                onSearch={onSearch}
            >
                {children}
            </SelectDropdown>
        );
        new Menu(dropdown, el).show();
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            className="select"
            onClick={e => openSelectMenu(e.target as Element)}
            value={value || ''}
            onInput={e => e.preventDefault()}
        />
    );
};