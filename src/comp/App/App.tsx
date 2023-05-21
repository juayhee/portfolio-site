import React from 'react';
import Title from '../Title/Title.tsx';
import styles from './App.module.css';

const App = (): React.ReactElement => {
    return (
        <div className={styles.local}><Title name="Tan Juay Hee"
                                             desc="aspiring game developer, storyteller, artist"/></div>
    );
};

export default App
