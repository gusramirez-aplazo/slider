
const slides = Array.from(document.querySelectorAll('.slider__item'));
const backBtn = document.getElementById('back-btn');
const fwdBtn = document.getElementById('fwd-btn');
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

function moveFwd(e) {
  const track = document.getElementById('track');
  const currentIndex = slides.findIndex((i) => i.classList.contains('current'));
  const next = slides[currentIndex].nextElementSibling;

  track.style.setProperty("transform", `translateX(${slideSize * (currentIndex + 1)}px)`);
  console.log(track)
  slides[currentIndex].classList.remove('current');
  next.classList.add('current');
}

fwdBtn.addEventListener('click', moveFwd);
