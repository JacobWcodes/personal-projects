const cardsContainer = document.querySelector('.container');

const cards = document.querySelectorAll('.panel');

cardsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.panel');

  if (!clicked) return;

  cards.forEach(function (card) {
    card.classList.remove('active');
  });

  clicked.classList.add('active');
});
