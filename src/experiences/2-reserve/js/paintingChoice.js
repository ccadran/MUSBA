import { Modal } from "../../../commons/components/Modal";
import { descriptionPaintings } from "./descriptionPainting";
import paintings from "../data/paintings";
import selectedPaintings from "../data/selectedPaintings";
import Game from "./Game";
import AudioManager from "./audioManager";


let containerPaintings = document.querySelector('#container-paintings');
let isSelectModeActive = false;
let reserveVackground = document.querySelector('#reserve-background')


containerPaintings.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") {
        return;
    }

    if (isSelectModeActive) {
        console.log("Une image est déjà en mode sélection.");
        return;
    }
    let img = e.target;
    let parentImg = img.parentElement;

    isSelectModeActive = true;
    const paintingData = paintings.find((painting) => painting.src === img.getAttribute("src"));
    addFichePainting(img, parentImg, paintingData);
});

function addFichePainting(img, parentImg, paintingData) {
    let descriptionContainer = document.createElement('div'); 
    let containerButton = document.createElement('div')
    
    const modal = new descriptionPaintings(paintingData.title, "", "selectModeDescription", descriptionContainer);
    const contentArray = [
        `${paintingData.autor}`,
        `${paintingData.date}`,
        `${paintingData.description}`,
        `${paintingData.height}`
    ];
    modal.showModalWithHtml(contentArray);

    containerPaintings.classList.add("containerPaintingsOnselectMode")
    reserveVackground.style.display ="none";
    parentImg.classList.add('selectMode');
    img.classList.add("selectModeImg");
    parentImg.classList.add('selectMode');
    containerButton.classList.add('containerButton')
    img.classList.add("selectModeImg");
    descriptionContainer.classList.add('descriptionContainer');

    let removeLink = createRemoveLink(parentImg, img);
    let pushLink = createPushLink(paintingData, parentImg, img);


    descriptionContainer.append(removeLink, pushLink, containerButton);
    containerButton.append(removeLink, pushLink)
    parentImg.append(descriptionContainer);
}

function removeFichePainting(parentImg, img) {
    const descriptionContainer = parentImg.querySelector('.descriptionContainer');
    if (descriptionContainer) {
        descriptionContainer.remove();
    }

    containerPaintings.classList.remove("containerPaintingsOnselectMode")
    reserveVackground.style.display ="block";
    parentImg.classList.remove('selectMode');
    img.classList.remove("selectModeImg");
    isSelectModeActive = false;
}

function createRemoveLink(parentImg, img) {
    let removeLink = document.createElement('a');
    removeLink.href = "#";
    removeLink.classList.add('small', 'black', 'nextButton' ,'button')
    removeLink.innerText = "Retour";
    removeLink.style.marginRight = "10px";
    removeLink.addEventListener("click", (e) => {
        e.preventDefault();
        removeFichePainting(parentImg, img);
    });
    return removeLink;
}

function createPushLink(paintingData, parentImg, img) {
    let pushLink = document.createElement('a');
    pushLink.href = "#";
    pushLink.classList.add('small', 'black', 'nextButton' ,'button')
    pushLink.innerText = "Valider";
    pushLink.addEventListener("click", (e) => {
        e.preventDefault();

        if (!selectedPaintings.includes(paintingData)) {
            selectedPaintings.push(paintingData);
            const index = paintings.findIndex(painting => painting.id === paintingData.id);
            if (index !== -1) {
                paintings.splice(index, 1); 
            }
            removeFichePainting(parentImg, img);

            AudioManager.getInstance().canPlaySound = true;
            Game.getInstance().unloadScene("scene-reserve");
            Game.getInstance().loadScene("scene-exhibition");
            AudioManager.getInstance().canPlaySound = false;
        } else {
            console.error ('Cette peinture est déjà sélectionnée.');
        }
    });
    return pushLink;
}