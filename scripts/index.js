const sectLead = document.querySelector('.lead');
const cardsLead = sectLead.querySelectorAll('.lead__card');
const Btn = sectLead.querySelectorAll('.radio__item');

const sectLeadCards = document.querySelector('.lead__cards');
const cardsLeadCards = sectLeadCards.querySelectorAll('.lead__card');
const BtnLeadCards = sectLeadCards.querySelectorAll('.radio__item');

const sectMobile = document.querySelector('.mobile');
const cardsMobile = sectMobile.querySelectorAll('.mobile__photo');
const BtnMobile = sectMobile.querySelectorAll('.radio__item');

Btn.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const activeBtn = sectLead.querySelector('.radio__item_check');
    activeBtn.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    cardsLead.forEach((elem, i) => {
      if (index === i) {
        elem.classList.remove('lead__card_close');
      } else {
        elem.classList.add('lead__card_close');
      }
    });
  });
});
BtnLeadCards.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const activeBtn = sectLeadCards.querySelector('.radio__item_check');
    activeBtn.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    cardsLeadCards.forEach((elem, i) => {
      if (index === i) {
        elem.classList.remove('lead__card_close');
      } else {
        elem.classList.add('lead__card_close');
      }
    });
  });
});
BtnMobile.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const activeBtn = sectMobile.querySelector('.radio__item_check');
    activeBtn.classList.remove('radio__item_check');
    evt.target.classList.add('radio__item_check');
    cardsMobile.forEach((elem, i) => {
      if (index === i) {
        elem.classList.remove('lead__card_close');
      } else {
        elem.classList.add('lead__card_close');
      }
    });
  });
});
/*функция для активной/неактивной кнопки*/
/*function handleClickFunction(button) {
  button.classList.toggle('radio__item_check');
};

Btn.forEach(function (button) {
  button.addEventListener('click', function() {
    button.classList.toggle('radio__item_check');
  });
});*/