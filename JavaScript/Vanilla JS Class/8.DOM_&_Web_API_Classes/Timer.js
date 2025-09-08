// Timer.js

class Timer {
    constructor(callback, interval) {
        this.callback = callback;
        this.interval = interval;
        this.timerId = null;
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(this.callback, this.interval);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.interval);
            this.timerId = null;
        }
    }
}


// Try both export types:
export { Timer }; // named export
// OR: export default Timer;