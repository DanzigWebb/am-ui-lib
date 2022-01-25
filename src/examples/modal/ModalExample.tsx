import { BtnGroupItem, BtnGroup } from '../../lib/components/btn-group';
import React, { ReactNode, useContext, useState } from 'react';
import { Modal, ModalContext } from '../../lib/components/modal';
import { ModalErrorExample } from './ModalErrorExample';


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
            new Modal(
                <ModalErrorExample
                    message="Check number"
                />
            ).show();
        } else {
            onCheck(check);
            context.onClose();
        }
    }

    function reset() {
        setCheck(null);
    }

    return (
        <div className="modal-box">
            <h3 className="text-lg">{title || 'Modal example'}</h3>

            <div className="py-2 flex items-center">
                <BtnGroup
                    multiple={false}
                    value={check}
                    onChange={e => setCheck(e)}
                >
                    <BtnGroupItem btnId={1}>1</BtnGroupItem>
                    <BtnGroupItem btnId={2}>2</BtnGroupItem>
                    <BtnGroupItem btnId={3}>3</BtnGroupItem>
                    <BtnGroupItem btnId={4}>4</BtnGroupItem>
                    <BtnGroupItem btnId={5}>5</BtnGroupItem>
                </BtnGroup>

                <div className="actions px-2">
                    <button className="btn btn-sm btn-circle btn-ghost" onClick={reset}>
                        <i className="fas fa-times text-error"/>
                    </button>
                </div>
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