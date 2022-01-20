import { render, unmountComponentAtNode } from 'react-dom';
import { ReactNode } from 'react';
import { ModalContainer } from './ModalContainer';


export class Modal {

    private portalEl: Element | null = null;

    constructor(
        private node: ReactNode
    ) {
    }

    show() {
        this.portalEl = document.createElement('div');
        document.body.appendChild(this.portalEl);

        const container = (
            <ModalContainer
                onClose={() => this.close()}
                context={this}>
                {this.node}
            </ModalContainer>
        );

        render(container, this.portalEl);
    }

    close() {
        if (this.portalEl) {
            unmountComponentAtNode(this.portalEl);
            document.body.removeChild(this.portalEl);
        }
    }
}
