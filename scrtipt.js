const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

left.addEventListener('click', () => {
  resetInterval();
  prev();
});
right.addEventListener('click', () => {
  resetInterval();
  next();
});

let index = 0;

let interval = setInterval(next, 2000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(next, 2000);
}

function next() {
  index++;
  if (index >= img.length) {
    index = 0;
  }
  changeImage();
}

function prev() {
  index--;
  if (index < 0) {
    index = img.length - 1;
  }
  changeImage();
}

function changeImage() {
  imgs.style.transform = `translateX(${index * -500}px)`;
}
