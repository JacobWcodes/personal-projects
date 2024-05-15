const progress = document.querySelector('#progress');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

// keeping record of state
let currentStep = 1;

// for changing bar width:
let progressBar = ['0%', '33%', '66%', '99%'];

// Moving to next step:
const nextStep = function () {
  // 1. check whether we're on the last step (circle) in nodelist already and guard against continuing:
  if (currentStep < circles.length) {
    currentStep++;

    // Update DOM:

    // 2. if that step is not active, activate it and whatever is before:
    circles.forEach(function (circle) {
      if (
        !(circle.innerText > currentStep) &&
        !circle.classList.contains('active')
      ) {
        //    - add active class to current circle:
        circle.classList.add('active');
        //    - Update progress bar width to fill in up to current step:
        progress.style.width = progressBar[`${currentStep - 1}`];
      }
      // 3. if on the last step, disable 'Next' button in DOM.
    });

    if (currentStep > 3) {
      btnNext.disabled = true;
    }

    btnPrev.disabled = false;
  }
};

// Moving to previous step:
const prevStep = function () {
  // 1. check whether we're on the forst step (circle) in nodelist already and guard against continuing:
  if (currentStep != 1) {
    currentStep--;

    // Update DOM:

    // 2. if that step is not active, activate it and whatever is before:
    circles.forEach(function (circle) {
      if (
        circle.innerText > currentStep &&
        circle.classList.contains('active')
      ) {
        //    - add active class to current circle:
        circle.classList.remove('active');
        //    - Update progress bar width to fill in up to current step:
        progress.style.width = progressBar[`${currentStep - 1}`];
      }
      // 3. if on the first step, disable 'Prev' button in DOM.
    });

    if (currentStep === 1) {
      btnPrev.disabled = true;
    }
    btnNext.disabled = false;
  }
};

// onclick 'Next':
btnNext.addEventListener('click', nextStep);

// onclick 'Prev':
btnPrev.addEventListener('click', prevStep);
