// const fs = require('fs');
// const img = fs.readFileSync(`${__dirname}/../assets/paper.png`);


function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }
  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
      event
    .dataTransfer
    .clearData();
  }

  const initiate = () => {
    // const canvas = document.querySelector("#myCanvas");
    // const ctx = canvas.getContext("2d");
    // ctx.drawImage(img, 10, 10);
    debugger;
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');
    const img = new Image;
img.onload = function(){
  ctx.drawImage(img,0,200, 400, 600 ); // Or at whatever offset you like
};
img.src = '../assets/paper.png';
  }

initiate();