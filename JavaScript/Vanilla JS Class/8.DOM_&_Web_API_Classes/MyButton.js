// MyButton.js
class MyButton extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open'});

        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'click me';

        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 5px;
            }
            
            button:hover {
                background-color: #45a049;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(button)
    }
}


// Resgister as a custom element
customElements.define('my-button', MyButton);

// Try both export types:
export default MyButton;
// OR: export { MyButton };