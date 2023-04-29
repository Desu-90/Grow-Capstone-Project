
const LOCAL_STORAGE_KEY = 'myImage';


window.addEventListener('load', () => {
    const savedImgSrc = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedImgSrc) {
        const exportedImg = document.querySelector('#savedImg');
        const img = new Image();
        img.src = savedImgSrc;
        img.style.width = '850px';
        img.style.paddingTop = '250px'
        img.setAttribute('id', 'export');
        exportedImg.appendChild(img);
    }
})