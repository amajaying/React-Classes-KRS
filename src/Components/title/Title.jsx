import React from 'react';

function Title(props) {
    return (
        <div>
            <h1 className="text-4xl font-semibold mt-[-65px] text-left mx-24">{props.text}</h1>
        </div>
    );
}

export default Title;