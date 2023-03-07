const drawCanvas = () => {
    const img = document.querySelector("#paper");
    img.src = '../assets/paper.png'
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
    debugger;
    ctx.drawImage(img, 10, 10);
}

window.onload = drawCanvas;