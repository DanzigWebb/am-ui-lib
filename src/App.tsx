import React, { useState } from 'react';
import './App.css';
import { Tab, TabGroup } from './lib/components/tabs';
import { BtnGroup, BtnGroupItem } from './lib/components/btn-group';
import { ModalExample } from './examples/modal/ModalExample';
import { Modal } from './lib/components/modal';
import { Menu } from './lib/components/menu';
import { MenuExample } from './examples/menu/MenuExample';

interface State {
    tabIndex: number,
    btnIndex: number,
    checkedBtn: null | number,
}

function App() {

    const [state, setState] = useState<State>({
        tabIndex: 0,
        btnIndex: 0,
        checkedBtn: null,
    });

    const onTabChange = (tabIndex: any) => {
        setState({...state, tabIndex});
    };

    const onBtnGroupChange = (btnIndex: any) => {
        setState({...state, btnIndex});
    };

    const onModalCheck = (checkedBtn: number) => {
        setState({...state, checkedBtn});
    };

    const openModal = () => {
        const modal = new Modal(
            <ModalExample
                checkedBtn={state.checkedBtn}
                title={<b>Динамическое модальное окно</b>}
                onCheck={(n) => onModalCheck(n)}
            />
        );

        modal.show();
    };

    function openMenu(reference: Element) {
        new Menu(<MenuExample/>, reference).show();
    }

    return (
        <div className="App">
            <header className="App-header">
                <br/>

                <button className="btn" onClick={e => openMenu(e.target as Element)}>Menu</button>

                <br/>

                <p className="my-1">Active tab index: {state.tabIndex}</p>
                <TabGroup onChange={onTabChange}>
                    <Tab index={0} label="Tab1">Tab1 content</Tab>
                    <Tab index={1} label="Tab2">Tab2 content</Tab>
                    <Tab index={2} label="Tab3">Tab3 content</Tab>
                </TabGroup>

                <br/>

                <p className="my-1">Active btn id: {state.btnIndex}</p>
                <BtnGroup onChange={onBtnGroupChange}>
                    <BtnGroupItem btnId={0}>1</BtnGroupItem>
                    <BtnGroupItem btnId={1}>2</BtnGroupItem>
                    <BtnGroupItem btnId={2}>3</BtnGroupItem>
                    <BtnGroupItem btnId={3} selected={true}>4</BtnGroupItem>
                    <BtnGroupItem btnId={4}>5</BtnGroupItem>
                </BtnGroup>

                <br/>

                <p className="my-1">Checked btn in modal: {state.checkedBtn}</p>
                <button className="btn my-2" onClick={openModal}>Open modal</button>
            </header>
        </div>
    );
}

export default App;
