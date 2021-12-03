const sectLead = document.querySelector('.lead');
const blockCardsLead = sectLead.querySelector('.radio');
const radioBtnLead = blockCardsLead.querySelectorAll('.radio__check');
const cardsLead = sectLead.querySelectorAll('.lead__card');

function cardOpen (card) {
    card.classList.remove('lead__card_close')
}
radioBtnLead.addEventListener("click", function () {
    cardOpen(cardsLead)
  });
/*
radioBtnLead.addEventListener('click', () => cardsLead.classList.add('lead__card_close'));
*/