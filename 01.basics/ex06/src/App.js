import React from 'react';

const App = function() {
    // const app = React.createElement('h1', null, 'Hello World');
    // return app;
    const message = "Hello World";
    return (
        <div>
            <h1>{message}</h1>
            {/* <h1>{message + ` 안뇽`}</h1> */}
        </div>
    );
}

export {App}