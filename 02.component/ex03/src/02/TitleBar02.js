import React from "react";

export default function TitleBar02() {
    const onClickHandler = (e) => {
        console.log('TitleBar02 clicked');
    }

    return (
        <h1
            onClick={ onClickHandler }
            style={{cursor: 'pointer'}}>
            ex03 - Functional Event Handler(Functional Component)
        </h1>
    )
}