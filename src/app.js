const canvas = document.querySelector("#canvas-content");
const flowers = document.querySelectorAll('#anemone, #aspen, #babys, #bell, #birch, #calla, #carnation, #daisy, #daphodile, #delphinium, #green, #hydrangea, #lilly, #merigold, #million, #palma, #poppy, #rose, #sunflower, #tulip, #violet');
const trash = document.querySelector('#trash');
const exportBtn = document.querySelector('#send');
const toolTipButton = document.querySelector('#info');
const closeToolTip = document.querySelector('#exitTT');
const toolTip = document.querySelector('#infoTT');
const restartButton = document.querySelector('#restart')

const quotes = [
    "Beautifully arranged blooms, well done!",
    "Your flower arrangement is simply stunning!",
    "What a stunning display of flowers, congratulations!",
    "Congratulations on creating such a beautiful arrangement.",
    "Your flower arrangement is truly magnificent!",
    "Well done on creating such a beautiful floral masterpiece!",
    "Amazing work! Your flower arrangement is simply beautiful!",
    "Congratulations on creating such a stunning arrangement of flowers.",
    "Your talent for flower arrangement is impressive!",
    "A stunning display of flowers, well done!",
  ];
const title = document.querySelector('#title');

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // otherwise, move the DIV from anywhere inside the DIV:
    let isCloned = false;

    function createClone(flower) {
        const clone = flower.cloneNode(true);
        if (flower.nextSibling) {
            flower.parentNode.insertBefore(clone, flower.nextSibling);
        } else {
            flower.parentNode.appendChild(clone);
        }
        return clone;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        if (!isCloned) {
            const clone = createClone(elmnt);

            dragElement(clone);
            isCloned = true;
        }
        elmnt.style.position = "absolute";
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (pos4 - (elmnt.offsetHeight / 2)) + "px";
        elmnt.style.left = (pos3 - (elmnt.offsetWidth / 2)) + "px";

        canvas.appendChild(elmnt);

        document.onpointerup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onpointermove = elementDrag;
        console.log('mouseDown');
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        console.log("grabbed");

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // console.log(`pos3: ${pos3}`)
        // set the element's new position:
        elmnt.style.top = (pos4 - (elmnt.offsetHeight / 2)) + "px";
        elmnt.style.left = (pos3 - (elmnt.offsetWidth / 2)) + "px";
        if (pos3 >= 10) {

            switch (elmnt.id) {
                case "anemone":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/anemone.png">';
                    break;
                case "aspen":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/aspen.png">';
                    break;
                case "babys":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/babys.png">';
                    break;
                case "bell":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/bell.png">';
                    break;
                case "birch":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/birch.png" >';
                    break;
                case "calla":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/calla.png" >';
                    break;
                case "carnation":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/carnation.png" >';
                    break;
                case "daphodile":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/daffodile.png" >';
                    break;
                case "daisy":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/daisy.png">';
                    break;
                case "delphinium":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/delphinium.png">';
                    break;
                case "green":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/green.png">';
                    break;
                case "hydrangea":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/hydrangea.png">';
                    break;
                case "lilly":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/lilly.png">';
                    break;
                case "merigold":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/merigold.png">';
                    break;
                case "million":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/million.png">';
                    break;
                case "palma":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/palma.png">';
                    break;
                case "poppy":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/poppy.png">';
                    break;
                case "rose":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/rose.png">';
                    break;
                case "sunflower":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/sunflower.png">';
                    break;
                case "tulip":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/tulip.png">';
                    break;
                case "violet":
                    elmnt.innerHTML = '<img id="item" src="../assets/full_flowers/violet.png">';
                    break;
            }
        }
    }

    function closeDragElement() {
        document.onpointerup = null;
        document.onpointermove = null;
        const draggableRect = elmnt.getBoundingClientRect();
        const droppableRect = trash.getBoundingClientRect();

        if (draggableRect.left < droppableRect.right &&
            draggableRect.right > droppableRect.left &&
            draggableRect.top < droppableRect.bottom &&
            draggableRect.bottom > droppableRect.top) {
            elmnt.remove();
        }
        let zIndex = elmnt.style.zIndex;
        zIndex = -98;
        zIndex--;
        // randomizes z-index but it's kind of annoying, keeping jic
        // const zIndex = Math.floor(Math.random() * 98) + 1;
        // elmnt.style.zIndex = zIndex;
        //     const otherFlowers = canvas.querySelectorAll('.flower');
        //     let maxZIndex = -1;
        //     otherFlowers.forEach(flower => {
        //         const zIndex = parseInt(flower.style.zIndex);
        //         if (zIndex && zIndex > maxZIndex) {
        //             maxZIndex = zIndex;
        //         }
        //     });
        //     elmnt.style.zIndex = (maxZIndex - 1).toString();
        // elmnt.style.zIndex = zIndex

    }

    elmnt.onpointerdown = dragMouseDown;
}

flowers.forEach(flower => {
    dragElement(flower);
});

const LOCAL_STORAGE_KEY = 'myImage';

if (window.location.href === 'http://127.0.0.1:5500/client/paper.html' || window.location.href === 'http://127.0.0.1:5500/client/mason.html' || window.location.href === 'http://127.0.0.1:5500/client/glass.html'|| window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/paper.html'|| window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/mason.html' || window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/glass.html'|| window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/glass.html'|| window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/paper.html'|| window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/mason.html') {
    exportBtn.addEventListener('click', () => {
        // Use html2canvas to export the div to an image
        html2canvas(document.querySelector("#canvas-content"), {backgroundColor:null, width: 1200, height: 800}).then(canvas => {
            // Create an Image element and set its src to the canvas data URL
            let img = new Image();
            img.src = canvas.toDataURL();
            localStorage.setItem(LOCAL_STORAGE_KEY, img.src);
            // Append the Image element to the body of the page
            window.location.href = "../client/end.html";

            let link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'flower.png';

            // Trigger a click event on the link to download the image
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
}



window.addEventListener('load', () => {
    const savedImgSrc = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedImgSrc) {
        const exportedImg = document.querySelector('#savedImg');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex]
        title.innerHTML = selectedQuote;
        const img = new Image();
        img.src = savedImgSrc;
        img.style.width = '850px';
        img.setAttribute('id', 'export');
        exportedImg.appendChild(img);
    }
})

closeToolTip.addEventListener('click', () => {
    toolTip.style.display = 'none';
})

toolTipButton.addEventListener('click', () => {
    toolTip.style.display = 'inline'
})

restartButton.addEventListener('click', () => {
    if(window.location.href === 'http://127.0.0.1:5500/client/paper.html' || window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/paper.html'|| window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/paper.html'){
        const image1HTML = '<img id="paperB" src="../assets/paper_back.png">'
        const image2HTML = '<img id="paperF" src="../assets/paper_top.png">'
        canvas.innerHTML = image1HTML + image2HTML
    }
    if(window.location.href === 'http://127.0.0.1:5500/client/mason.html'|| window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/mason.html'|| window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/mason.html'){
        const image1HTML = '<img id="masonB" src="../assets/mason_back.png">'
        const image2HTML = '<img id="masonF" src="../assets/mason_front.png">'
        canvas.innerHTML = image1HTML + image2HTML
    }
    if(window.location.href === 'http://127.0.0.1:5500/client/glass.html'|| window.location.href == 'https://people.rit.edu/dao9631/Capstone/My-Capstone-Project/client/glass.html'|| window.location.href == 'https://people.rit.edu/~dao9631/Capstone/My-Capstone-Project/client/glass.html'){
        const image1HTML = '<img id="glassB" src="../assets/vase_back.png">'
        const image2HTML = '<img id="glassF" src="../assets/vase_front.png">'
        canvas.innerHTML = image1HTML + image2HTML
    }
    console.log('we work');
});