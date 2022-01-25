import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../lib/components/modal';

interface ModalErrorExamplePops {
    title?: ReactNode;
    message?: ReactNode;
}

export const ModalErrorExample = (
    {
        title = 'Error!',
        message = 'Something going wrong...'
    }: ModalErrorExamplePops) => {

    const context = useContext(ModalContext);

    return (
        <div className="modal-box">
            <h2 className='text-xl font-bold py-2'>{title}</h2>
            <p>{message}</p>
            <div className="modal-action">
                <button className="btn" onClick={context.onClose}>Close</button>
            </div>
        </div>
    )

};