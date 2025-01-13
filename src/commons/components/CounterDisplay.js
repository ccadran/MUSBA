export class CounterDisplay {
    constructor(startValue, className = '') {
        this.className = className;
        this.startValue = startValue;

        this.counterDisplay = document.createElement('div');
        this.counterDisplay.className = `stats-display ${this.className}`;

        this.titleContainer = document.createElement('div');
        this.titleContainer.className = 'title-container';
        this.titleElement = document.createElement('h3');
        this.titleElement.className = 'h3-title-serif';
        this.titleElement.textContent = 'Compteur';
        this.titleContainer.appendChild(this.titleElement);

        this.counterContainer = document.createElement('div');
        this.counterContainer.className = 'counter-container';
        this.counter = document.createElement('h3');
        this.counter.textContent = this.startValue
        this.counterContainer.appendChild(this.counter);

        this.counterDisplay.appendChild(this.titleContainer);
        this.counterDisplay.appendChild(this.counterContainer);

        document.body.appendChild(this.counterDisplay);
    
    }

    increment(number) {
        this.counter.textContent = parseInt(this.counter.textContent) + number;
    }

    decrement(number) {
        this.counter.textContent = parseInt(this.counter.textContent) - number;
    }

    reset() {
        this.counter.textContent = this.startValue;
    }


}
