
const startBtn = document.getElementById('startBtn');
const inputContainer = document.getElementById('inputContainer');
const generateBulbsBtn = document.getElementById('generateBulbs');
const bulbBox = document.getElementById('bulbBox');

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');  
  inputContainer.classList.remove('hidden');  
});

generateBulbsBtn.addEventListener('click', () => {
  const numBulbs = document.getElementById('numBulbs').value;
  if (numBulbs && numBulbs > 0) {
    generateBulbs(numBulbs);  
  }
});

function generateBulbs(num) {
  bulbBox.innerHTML = '';  
  for (let i = 0; i < num; i++) {
    const bulbContainer = document.createElement('div');
    bulbContainer.classList.add('bulb-container');
    const img = document.createElement('img');
    img.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';  
    img.classList.add('bulb-image');
    img.setAttribute('data-state', 'off');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => toggleBulb(img));

    bulbContainer.appendChild(img);
    bulbContainer.appendChild(checkbox);
    bulbBox.appendChild(bulbContainer);
  }
}

function toggleBulb(bulb) {
  if (bulb.getAttribute('data-state') === 'off') {
    bulb.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png'; 
    bulb.setAttribute('data-state', 'on');
  } else {
    bulb.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
    bulb.setAttribute('data-state', 'off');
  }
}
