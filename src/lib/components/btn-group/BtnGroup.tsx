import React, { Component } from 'react';
import { BtnGroupContext, BtnGroupContextState } from './BtnGroupContext';

interface BtnGroupProps {
    children: React.ReactNode;
    onChange?: (btnId: any) => void;
    multiple?: boolean;
}

export class BtnGroup extends Component<BtnGroupProps, BtnGroupContextState> {

    state: BtnGroupContextState = {
        activeBtn: new Set([0]),
        multiple: !!this.props.multiple,
        updateActiveBtn: this.updateActiveBtn.bind(this)
    };

    private updateActiveBtn(btnId: any) {
        const activeBtn = new Set(this.state.activeBtn);
        if (!this.state.multiple) {
            activeBtn.clear();
            activeBtn.add(btnId)
        } else {
            activeBtn.has(btnId)
                ? activeBtn.delete(btnId)
                : activeBtn.add(btnId);
        }

        this.setState((state) => ({
            ...state,
            activeBtn
        }));

        this.onActiveBtnChange(btnId);
    }

    private onActiveBtnChange(btnId: any) {
        if (this.props.onChange) {
            this.props.onChange(btnId);
        }
    }

    render() {
        return (
            <BtnGroupContext.Provider value={this.state}>
                <div className="btn-group">
                    {this.props.children}
                </div>
            </BtnGroupContext.Provider>
        );
    }
}