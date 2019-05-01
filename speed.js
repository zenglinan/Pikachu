window.speed = 30;
let speedButtons = document.querySelectorAll('.control');
buttonWrapper.addEventListener('click', (e) => {
  e = e || window.event;
  if (e.target.tagName !== 'SPAN') { return; }
  activeButton(e.target);
  justSpeed(e.target.getAttribute('speed'));
})

function activeButton(tar) {
  for (let i = 0, len = speedButtons.length; i < len; i++) {
    speedButtons[i].classList.remove('active');
  }
  tar.classList.add('active');
}
function justSpeed(speed) {
  switch (speed) {
    case 'slow': window.speed = 80;
    break;
    case 'medium': window.speed = 30;
    break;
    case 'fast': window.speed = 10;
    break;
  }
}