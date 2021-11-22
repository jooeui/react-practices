const App = function() {
    // Component
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

// Rendering
document
    .getElementById('root')
    .appendChild(App());