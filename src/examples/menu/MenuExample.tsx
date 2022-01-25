import { MenuItem } from '../../lib/components/menu';
import React from 'react';

const Icon = ({name}: { name: string }) => (
    <i className={`fas ${name} inline-block w-5 h-5 mr-2 stroke-current`}/>
);

export const MenuExample = () => (
    <>
        <MenuItem><Icon name="fa-address-card"/> First</MenuItem>
        <MenuItem><Icon name="fa-archive"/> Second</MenuItem>
        <MenuItem><Icon name="fa-arrows-alt"/> Third</MenuItem>
    </>
);