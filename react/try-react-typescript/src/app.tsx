import * as React from 'react';
import { Header, About } from './components';

// :约束类型 降低出错
export const App: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Header />
            <About />
        </div>
    )
}