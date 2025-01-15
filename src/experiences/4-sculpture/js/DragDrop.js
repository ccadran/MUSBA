import ITEMS from '../data/item.js'; // Importer le tableau ITEMS

export default class DragDrop {
    constructor(workAreaSelector, itemSelector, stepManager) {
        this.workArea = document.querySelector(workAreaSelector);
        this.items = document.querySelectorAll(itemSelector);
        this.stepManager = stepManager; // Utiliser `stepManager` pour gérer les étapes
        this.currentItem = '3'; // Identifiant attendu pour l'Argile
        this.targetSquare = this.createTargetSquare();
        this.state = 0; // État initial pour l'étape 1
        this.initDragEvents();
    }

    createTargetSquare() {
        const img = document.createElement('img');
        img.src = './img/argile2.png'; // Image initiale
        img.alt = 'Carré initial (Argile)';
        img.style.width = '180px';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        img.style.transition = 'all 0.3s ease'; // Transition pour les changements

        this.workArea.appendChild(img);
        return img; // Retourne l'image directement
    }

    initDragEvents() {
        // Réinitialise la sélection des items après leur création
        this.items = document.querySelectorAll('.item');

        this.items.forEach(item => {
            console.log(`Ajout de l'événement dragstart pour l'item avec id : ${item.dataset.item}`);
            item.addEventListener('dragstart', this.onDragStart.bind(this)); // Bind pour le bon contexte
            item.addEventListener('dragend', this.onDragEnd.bind(this)); // Ajout de dragend
        });

        // Ajoute les événements de drop et dragover à la zone de travail
        this.workArea.addEventListener('dragover', this.onDragOver);
        this.workArea.addEventListener('drop', this.onDrop.bind(this)); // Lier le contexte
    }

    onDragStart(event) {
        const item = event.target.closest('.item'); // Remonte au parent avec la classe .item
        const itemId = item ? item.dataset.id : null; // Récupère data-id depuis le parent

        console.log(`Début du drag : dataset.id = ${itemId}`);

        if (!itemId) {
            console.error('Erreur : Aucun data-id trouvé sur l’élément.');
            return;
        }

        // Ajoute la classe dragging pour griser l'item
        item.classList.add('dragging');

        // Ajoute l'ID de l'élément dans les données de transfert
        event.dataTransfer.setData('text/plain', itemId);
    }

    onDragEnd(event) {
        const item = event.target.closest('.item'); // Remonte au parent avec la classe .item
        if (item) {
            // Retire la classe dragging lorsque le drag est terminé
            item.classList.remove('dragging');
            console.log(`Fin du drag pour l'item : ${item.dataset.id}`);
        }
    }

    onDragOver(event) {
        // Empêche le comportement par défaut pour autoriser le drop
        event.preventDefault();
    }

    onDrop(event) {
        event.preventDefault();
        const droppedItemId = event.dataTransfer.getData('text/plain'); // Récupère l'ID transmis
        console.log(`Item déposé avec ID transmis : ${droppedItemId}`);

        const droppedItem = ITEMS.find(item => item.id === droppedItemId);
        if (!droppedItem) {
            console.error(`Erreur : Aucun item trouvé dans ITEMS avec l'ID ${droppedItemId}`);
            return;
        }

        console.log(`Item trouvé dans ITEMS : ${droppedItem.name}`);

        if (this.stepManager.getCurrentStep() === 1 && droppedItem.item === 3) {
            console.log('L’item Argile a été déposé correctement.');
            this.handleStep1(); // Gérer les transitions de l'étape 1
        } else {
            console.error('Erreur : seul "Argile" peut être déposé ici.');
            alert('Erreur : seul "Argile" peut être déposé ici.');
        }
    }

    handleStep1() {
        if (this.state === 0) {
            console.log('Étape 1 : L’image passe au carré agrandi.');
            this.targetSquare.src = './img/StatueArgileBas.png';
            this.targetSquare.style.width = '380px';
            this.targetSquare.style.height = '380px';
            this.state = 1; // Passe à l'état suivant
        } else if (this.state === 1) {
            console.log('Étape 1 : L’image passe au rectangle.');
            this.targetSquare.src = './img/StatueArgile.png';
            this.targetSquare.style.width = '380px';
            this.targetSquare.style.height = '270px';
            this.state = 2; // Passe à l'état suivant
            this.stepManager.nextStep(); // Passe à l'étape suivante dans stepManager
        } else if (this.state === 2) {
            console.log('Étape 1 terminée. Passage à l’étape 2.');
        }
    }
}
