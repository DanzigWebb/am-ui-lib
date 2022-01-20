import React, { useState } from 'react';
import './App.css';
import { Tab, TabGroup } from './lib/components/tabs';
import { BtnGroup } from './lib/components/btn-group/BtnGroup';
import { BtnGroupItem } from './lib/components/btn-group/BtnGroupItem';
import { Modal } from './lib/components/modal/Modal';
import { ModalExample } from './examples/modal/ModalExample';

function App() {

    const [tabIndex, setTabIndex] = useState(0);
    const [btnIndex, setBtnIndex] = useState(0);

    const onTabChange = (index: any) => {
        setTabIndex(index);
    };

    const onBtnGroupChange = (btnId: any) => {
        setBtnIndex(btnId);
    };

    const onModalCheck = (n: number) => {
        console.log('Пользователь выбрал кнопку: ', n);
    }

    const openModal = () => {
        const modalRef = Modal.open(
            <ModalExample
                title="Динамическое модальное окно"
                onCheck={(n) => {
                    onModalCheck(n);
                    Modal.close(modalRef);
                }}
            />
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <p className="my-1">Active tab index: {tabIndex}</p>
                <TabGroup onChange={onTabChange}>
                    <Tab index={0} label="Tab1">Tab1 content</Tab>
                    <Tab index={1} label="Tab2">Tab2 content</Tab>
                    <Tab index={2} label="Tab3">Tab3 content</Tab>
                </TabGroup>

                <br/>

                <p className="my-1">Active btn id: {btnIndex}</p>
                <BtnGroup multiple={true} onChange={onBtnGroupChange}>
                    <BtnGroupItem btnId={0}>1</BtnGroupItem>
                    <BtnGroupItem btnId={1}>2</BtnGroupItem>
                    <BtnGroupItem btnId={2}>3</BtnGroupItem>
                    <BtnGroupItem btnId={3} selected={true}>4</BtnGroupItem>
                    <BtnGroupItem btnId={4}>5</BtnGroupItem>
                </BtnGroup>

                <br/>

                <button className="btn my-2" onClick={openModal}>Open modal</button>
            </header>
        </div>
    );
}

export default App;
