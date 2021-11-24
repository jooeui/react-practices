import React from 'react';

export default function() {
    return (
        /* 
            React Component는 단일 루트 노트만 렌더링 할 수 있다.
            오류)
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2: Single Root node</p>
        */
        <div id="App">
            <h2>App02</h2>
            <p>JSX Tutorials - 특징2: Single Root node</p>
        </div>
    )
}