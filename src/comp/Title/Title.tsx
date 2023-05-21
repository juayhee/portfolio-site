import React from "react";
import styles from './Title.module.css';

type AppProps = {
    name: string;
    desc: string;
}
const Title = ({name, desc}: AppProps): React.ReactElement => {
    return (
        <>
            <div className={styles.name}>{name}</div>
            <div className={styles.desc}>{desc}</div>
        </>
    );
}
export default Title;