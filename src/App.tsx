import React, { useState } from 'react';
import './App.css';
import { Tab, TabGroup } from './lib/components/tabs';

function App() {

    const [tabIndex, setTabIndex] = useState(0);

    const onTabChange = (index: any) => {
        setTabIndex(index);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p className='my-1'>Active tab index: {tabIndex}</p>
                <TabGroup onChange={onTabChange}>
                    <Tab index={0} label="Tab1">Tab1 content</Tab>
                    <Tab index={1} label="Tab2">Tab2 content</Tab>
                    <Tab index={2} label="Tab3">Tab3 content</Tab>
                </TabGroup>
            </header>
        </div>
    );
}

export default App;
