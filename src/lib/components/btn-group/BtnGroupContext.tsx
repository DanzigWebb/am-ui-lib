import { createContext } from 'react';

export interface BtnGroupContextState {
    activeBtn: Set<any>;
    multiple?: boolean;
    updateActiveBtn?: (btnId: any) => void;
}

export const BtnGroupContext = createContext<BtnGroupContextState>({
    activeBtn: new Set()
});