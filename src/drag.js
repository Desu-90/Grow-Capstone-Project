const vase = () => {
    const c = document.getElementById("#vase");
    const ctx = c.getContext("2d");
    const img = document.getElementById("#glass")
    ctx.drawImage(img, 100, 100)
}

window.onload = vase;