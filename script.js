const tetimonialContainers = document.querySelectorAll('.tetimonial-container');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');

let currentSlide = 0;

function nextSlide() {
  tetimonialContainers.forEach((item) => {
    item.classList.remove('active');
  });
  currentSlide++;

  if (currentSlide > tetimonialContainers.length - 1) {
    currentSlide = tetimonialContainers.length - 1;
  }
  tetimonialContainers[currentSlide].classList.add('active');
}

function prevSlide() {
  tetimonialContainers.forEach((item) => {
    item.classList.remove('active');
  });
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = 0;
  }

  tetimonialContainers[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
});

document.addEventListener('keyup', (e) => {
  console.log(e);
  if (e.code === 'ArrowRight') {
    nextSlide();
  } else if (e.code === 'ArrowLeft') {
    prevSlide();
  }
});
