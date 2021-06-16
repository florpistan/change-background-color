const button = document.querySelector('button');
const body = document.querySelector('.container');
const colors = [
  '#6495ED',
  '#FFA52C',
  '#FFFF41',
  '#008018',
  '#0000F9',
  '#86007D',
  '#FF0018',
];

body.style.backgroundColor = '#6495ED';
button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
