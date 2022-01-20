import { render, unmountComponentAtNode } from 'react-dom';
import { ReactNode } from 'react';
import { ModalContainer } from './ModalContainer';

export interface ModalContext {

}

export class Modal {

    static close(div: Element) {
        unmountComponentAtNode(div);
        document.body.removeChild(div);
    }

    static open(component: ReactNode) {
        const div = document.createElement('div');
        document.body.appendChild(div);
        render(<ModalContainer onClose={() => div.remove()}>{component}</ModalContainer>, div);

        return div;
    }
}


// export const Modal2 = (props?: any) => {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const portal = ReactDOM.createPortal(ModalComponent, div);
//     render(portal, div);
// };