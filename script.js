const track = document.getElementById('track');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const backBtn = document.getElementById('back-btn');
const fwdBtn = document.getElementById('fwd-btn');
const slideSize = slides[0].getBoundingClientRect().width;

function moveFwd(e) {
  const currentIndex = slides.findIndex((i) => i.classList.contains('current'));
  const next = slides[currentIndex].nextElementSibling;

  if(next != null ){
    track?.style.setProperty("transform", `translateX(-${slideSize * (currentIndex + 1)}px)`);
    slides[currentIndex].classList.remove('current');
    next?.classList.add('current');
  }
}

function moveBack(e) {
  const currentIndex = slides.findIndex((i) => i.classList.contains('current'));
  const prev = slides[currentIndex].previousElementSibling;;

  if(prev != null ){
    track?.style.setProperty("transform", `translateX(-${slideSize * (currentIndex - 1)}px)`);
    slides[currentIndex].classList.remove('current');
    prev?.classList.add('current');
  }
}

fwdBtn?.addEventListener('click', moveFwd);
backBtn?.addEventListener('click', moveBack);
