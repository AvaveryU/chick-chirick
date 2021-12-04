/*переменные для секции с первой группой карточек*/
const sectLead = document.querySelector('.lead');
const cardsLead = sectLead.querySelectorAll('.lead__card');
const Btn = sectLead.querySelectorAll('.radio__item');
/*переменные для секции со второй группой карточек*/
const sectLeadCards = document.querySelector('.lead__cards');
const cardsLeadCards = sectLeadCards.querySelectorAll('.lead__card');
const BtnLeadCards = sectLeadCards.querySelectorAll('.radio__item');
/*переменные для секции mobile*/
const sectMobile = document.querySelector('.mobile');
const cardsMobile = sectMobile.querySelectorAll('.mobile__photo');
const BtnMobile = sectMobile.querySelectorAll('.radio__item');

/*функция для переключения карточек*/
function clickCard(card) {
  card.forEach((element) => {
    element.classList.toggle('lead__card_close')
  });
};

Btn.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const checkButton = sectLead.querySelector('.radio__item_check');
    checkButton.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    clickCard(cardsLead)
  });
});
BtnLeadCards.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const checkButton = sectLeadCards.querySelector('.radio__item_check');
    checkButton.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    clickCard(cardsLeadCards)
  });
});
BtnMobile.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const checkButton = sectMobile.querySelector('.radio__item_check');
    checkButton.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    cardsMobile.forEach((element, i) => {
      if (index === i) {
        element.classList.remove('lead__card_close');
      } else {
        element.classList.add('lead__card_close');
      }
    });
  });
});