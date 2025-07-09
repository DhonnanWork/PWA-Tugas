document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    const messageParagraph = document.getElementById('message');

    testButton.addEventListener('click', () => {
        messageParagraph.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
        console.log('Button was clicked!');
    });

    console.log('App script loaded!');
});
