import { BtnGroup } from '../../lib/components/btn-group/BtnGroup';
import { BtnGroupItem } from '../../lib/components/btn-group/BtnGroupItem';
import React, { ReactNode, useContext, useState } from 'react';
import { ModalContext } from '../../lib/components/modal/ModalContext';


interface ModalExampleProps {
    title?: string | ReactNode;
    checkedBtn: null | number;
    onCheck?: (index: number) => void;
}

export const ModalExample = (
    {
        title,
        checkedBtn,
        onCheck = () => {},
    }: ModalExampleProps) => {

    const [check, setCheck] = useState(checkedBtn);
    const context = useContext(ModalContext);


    function onSubmit() {
        if (!check) {
            alert('Выберете число!');
        } else {
            onCheck(check);
            context.onClose();
        }
    }

    return (
        <div className="modal-box">
            <h3 className="text-lg">{title || 'Modal example'}</h3>

            <div className="py-2">
                <BtnGroup
                    multiple={false}
                    value={checkedBtn}
                    onChange={e => setCheck(e)}
                >
                    <BtnGroupItem btnId={1}>1</BtnGroupItem>
                    <BtnGroupItem btnId={2}>2</BtnGroupItem>
                    <BtnGroupItem btnId={3}>3</BtnGroupItem>
                    <BtnGroupItem btnId={4}>4</BtnGroupItem>
                    <BtnGroupItem btnId={5}>5</BtnGroupItem>
                </BtnGroup>
            </div>

            <button
                className="btn"
                onClick={() => onSubmit()}
            >
                Выбрать
            </button>
        </div>
    );
};