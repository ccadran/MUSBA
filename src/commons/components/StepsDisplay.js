import EventEmitter from "./EventEmitter";

export class StepsDisplay extends EventEmitter{
    constructor(currentStep, stepsTarget, className = ''){
        super();
        this.currentStep = currentStep;
        this.stepsTarget = stepsTarget;
        this.className = className;

        this.stepsDisplay = document.createElement('div');
        this.stepsDisplay.className = `steps-display ${this.className}`;

        this.stepsContainer = document.createElement('div');
        this.stepsContainer.className = 'steps-container';

        this.CurrentStep = document.createElement('h3');
        this.CurrentStep.textContent = this.currentStep;
        this.CurrentStep.className = 'h3-title-serif';

        this.slash = document.createElement('h3');
        this.slash.textContent = '/';
        this.slash.className = 'h3-title-serif';

        this.StepsTarget = document.createElement('h3');
        this.StepsTarget.textContent = this.stepsTarget;
        this.StepsTarget.className = 'h3-title-serif';

        this.stepsContainer.appendChild(this.CurrentStep);
        this.stepsContainer.appendChild(this.slash);
        this.stepsContainer.appendChild(this.StepsTarget);
        this.stepsDisplay.appendChild(this.stepsContainer);

        document.body.appendChild(this.stepsDisplay);
    }

    increment(number){
        if(parseInt(this.CurrentStep.textContent) + number == this.stepsTarget){
            this.CurrentStep.textContent = this.stepsTarget;
            this.emit('stepsReached');
            
        }
        else{
            this.CurrentStep.textContent = parseInt(this.CurrentStep.textContent) + number;
        }
    }

    decrement(number){
        this.CurrentStep.textContent = parseInt(this.CurrentStep.textContent) - number;
    }

    reset(){
        this.CurrentStep.textContent = this.currentStep;
    }
}