import { CounterDisplay } from "./commons/components/CounterDisplay";
import { Modal } from "./commons/components/Modal";
import { ScoreDisplay } from "./commons/components/ScoreDisplay";
import { TimerDisplay } from "./commons/components/TimerDisplay";


const modal = new Modal('modal', 'Modal Title', 'This is the modal content Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex praesentium quo nam molestiae earum, cum consequuntur? Illo accusantium harum quo voluptas ipsam obcaecati suscipit ea fugit, ducimus alias quis.');
const timer = new TimerDisplay(60, 'timer-display');

const counterDisplay = new CounterDisplay(0);

const scoreDisplay = new ScoreDisplay(0);



const incrementButton = document.createElement('button');

incrementButton.textContent = 'Increment';

incrementButton.addEventListener('click', () => {
    counterDisplay.increment(2);
    scoreDisplay.increment(1);
}
)

document.body.appendChild(incrementButton);

modal.show();

timer.start()


