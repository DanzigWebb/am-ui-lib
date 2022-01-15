import React from 'react';
import './App.css';
import { TabGroup } from './lib/components/tabs/TabGroup';
import { Tab } from './lib/components/tabs/Tab';

function App() {

    const onTabChange = (index: any) => {
        console.log(index);
    }

    return (
        <div className="App">
            <header className="App-header">
                <TabGroup onChange={onTabChange}>
                    <Tab index={0} label='Tab1'>Tab1 content</Tab>
                    <Tab index={1} label='Tab2'>Tab2 content</Tab>
                    <Tab index={2} label='Tab3'>Tab3 content</Tab>
                </TabGroup>
            </header>
        </div>
    );
}

export default App;
