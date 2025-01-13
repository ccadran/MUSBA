import { Button } from "../commons/components/Button";
import { CounterDisplay } from "../commons/components/CounterDisplay";
import { Modal } from "../commons/components/Modal";
import { ScoreDisplay } from "../commons/components/ScoreDisplay";
import { StepsDisplay } from "../commons/components/StepsDisplay";
import { TimerDisplay } from "../commons/components/TimerDisplay";


const modal = new Modal('modal', 'This is the modal content Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex praesentium quo nam molestiae earum, cum consequuntur? Illo accusantium harum quo voluptas ipsam obcaecati suscipit ea fugit, ducimus alias quis.', 'test-css');
//parametres = titre, contenu, classe css

const timer = new TimerDisplay(60, 'timer-display');
//parametres = temps en minutes, classe css

const counterDisplay = new CounterDisplay(0, 'test-css');
//parametres = valeur de départ, classe css

const scoreDisplay = new ScoreDisplay(0, 25, 'test-css');
//parametres = valeur de départ, valeur cible, classe css


const stepsDisplay = new StepsDisplay(0,6, 'test-css');
//parametres = valeur de départ, valeur cible, classe css

const TextButton = new Button('le Boutton', 'https://www.google.com', 'small', 'black', 'test-css')
//parametres = texte, lien, taille, couleur, classe css
//La taille doit être big, normal ou small
//La couleur doit être black ou white



stepsDisplay.on('stepsReached', ()=>{
    console.log('Steps reached');

    
})


const incrementButton = document.createElement('button');

incrementButton.textContent = 'Increment';

incrementButton.addEventListener('click', () => {
    counterDisplay.increment(2);
    scoreDisplay.increment(1);
    stepsDisplay.increment(1);
}
)

document.body.appendChild(incrementButton);

modal.show();

timer.start()


