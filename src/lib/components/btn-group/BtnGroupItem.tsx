import { ReactNode, useContext, useEffect } from 'react';
import { BtnGroupContext } from './BtnGroupContext';

interface BtnGroupItemProps {
    btnId: any;
    children: ReactNode;
    selected?: boolean;
}

export const BtnGroupItem = (props: BtnGroupItemProps) => {
    const context = useContext(BtnGroupContext);
    const isActive = context.activeBtn.has(props.btnId);

    useEffect(() => {
        if (props.selected) {
            onSelectBtn();
        }
    }, [])

    const onSelectBtn = () => {
        if (context.updateActiveBtn) {
            context.updateActiveBtn(props.btnId)
        }
    }

    return (
        <button
            className={`btn ${isActive ? 'btn-active' : ''}`}
            onClick={onSelectBtn}
        >
            {props.children}
        </button>
    )
}