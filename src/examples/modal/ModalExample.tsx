import { BtnGroup } from '../../lib/components/btn-group/BtnGroup';
import { BtnGroupItem } from '../../lib/components/btn-group/BtnGroupItem';
import React, { useState } from 'react';

export const ModalExample = (props: {
    title?: string;
    onCheck?: (index: number) => void;
    onClose?: (index: number) => void;
}) => {

    const [check, setCheck] = useState(0);

    return (
        <div className="modal-box">
            <h3 className="text-lg">{props.title || 'Modal example'}</h3>

            <div className="py-2">
                <BtnGroup multiple={false} onChange={e => setCheck(e)}>
                    <BtnGroupItem btnId={0} selected={true}>1</BtnGroupItem>
                    <BtnGroupItem btnId={1}>2</BtnGroupItem>
                    <BtnGroupItem btnId={2}>3</BtnGroupItem>
                    <BtnGroupItem btnId={3}>4</BtnGroupItem>
                    <BtnGroupItem btnId={4}>5</BtnGroupItem>
                </BtnGroup>
            </div>

            <button
                className="btn"
                onClick={() => props.onCheck && props.onCheck(check + 1)}
            >
                Выбрать
            </button>
        </div>
    );

};