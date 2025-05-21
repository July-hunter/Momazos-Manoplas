const imageInput = document.getElementById('imageInput');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');

let image = new Image();

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    image.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

image.onload = () => {
  drawMeme();
};

generateBtn.addEventListener('click', drawMeme);

function drawMeme() {
  const width = image.width;
  const height = image.height;
  canvas.width = width;
  canvas.height = height;

  // Dibuja la imagen
  ctx.drawImage(image, 0, 0, width, height);

  // Estilo de texto
  ctx.fillStyle = 'whithe';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 4;
  ctx.textAlign = 'center';
  ctx.font = `${Math.floor(width / 10)}px Impact`;

  // Texto superior
  ctx.fillText(topText.value.toUpperCase(), width / 2, 60);
  ctx.strokeText(topText.value.toUpperCase(), width / 2, 60);

  // Texto inferior
  ctx.fillText(bottomText.value.toUpperCase(), width / 2, height - 20);
  ctx.strokeText(bottomText.value.toUpperCase(), width / 2, height - 20);
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});
