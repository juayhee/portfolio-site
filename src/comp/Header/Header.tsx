import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
    [label: string]: string;
};
const Header = (props: HeaderProps): React.ReactElement => {
    const labels = Object.keys(props);
    const urls = Object.values(props);

    const length = labels.length;
    const rows = [];

    for (let i = 0; i < length; i++) {
        rows.push(<a href={labels[i]}>{urls[i]}</a>);
    }

    return (
        <>
            {rows}
        </>
    )
};

export default Header;