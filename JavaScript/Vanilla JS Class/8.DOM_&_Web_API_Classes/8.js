console.log(typeof HTMLElement)
console.log(HTMLElement.prototype);

// ✅ If MyButton was a default export
import MyButton from "./MyButton.js";

// ✅ If Timer was a named export 
import { Timer } from "./Timer.js";

// Test the Timer 
const timer = new Timer(() => {
    console.log('Tick...')
}, 1000);

timer.start();

// Stop after 5 seconds
setTimeout(() => {
    timer.stop();
    console.log('Timer stopped.');
}, 5000)









// I GOT THIS ONE AFTER ASKING THAT THE MyButton Hasnt been used, but this has nothing to with what we were doing above
// // Dynamically create the custom button
// const dynamicBtn = document.createElement('my-button');
// dynamicBtn.setAttribute('label', 'Click Me Dynamically');

// // Append it to the DOM
// document.body.appendChild(dynamicBtn);