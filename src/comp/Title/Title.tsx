import React from "react";
import './Title.module.css';

type AppProps = {
    name: string;
    desc: string;
}
const Title = ({name, desc}: AppProps): React.ReactElement => {
    return (
        <>
            <div className="name">{name}</div>
            <div className="desc">{desc}</div>
        </>
    );
}
export default Title;