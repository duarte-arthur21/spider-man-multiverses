function handleMouseEnter() {
    this.classList.add('s-card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);