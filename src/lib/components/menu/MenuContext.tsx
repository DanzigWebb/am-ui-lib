import { createContext } from 'react';

export interface MenuContextState {
    onClose: () => void;
}

export const MenuContext = createContext<MenuContextState>({
    onClose() {}
});