// window.onload = drawCanvas;
// const dragElement = (e) => {
//     let pos1 = 0, pos2 = 0, pos = 0, pos4 = 0
//     e.onmousedown = dragMouseDown;
// }

// const dragMouseDown = (e) => {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmmouseup;
//     document.onmousemove = elementDrag;
// }

// const elementDrag = (e) => {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     e.style.top = (elmnt.offsetTop - pos2) + "px";
//     e.style.left = (elmnt.offsetLeft - pos1) + "px";
// }

let rose = document.querySelector("#rose");
let tulip = document.querySelector("#tulip");
let daisy = document.querySelector("#daisy");
let lily = document.querySelector("#lily");
let poppy = document.querySelector("#poppy");

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        console.log("grabbed");
        elmnt.style.width = '150px';
        switch (elmnt) {
            case rose:
                elmnt.innerHTML = '<img src="../assets/rose.png" id="item">';
                break;
            case tulip:
                elmnt.innerHTML = '<img src="../assets/tulip.png" id="item">';
                break;
            case daisy:
                elmnt.innerHTML = '<img src="../assets/daisy.png" id="item">';
                break;
            case lily:
                elmnt.innerHTML = '<img src="../assets/lily.png" id="item">';
                break;
            case poppy:
                elmnt.innerHTML = '<img src="../assets/poppy.png" id="item">';
                break;
        }
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        // const item = document.createElement();
        // item.innerHTML = '<span id="mydiv"><img id="icon" src="../assets/rose.png"><p>Rose</p>'
        console.log("dropped");
        // const selection = document.querySelector("#mydiv");
        // const item = document.createElement('img');
        // item.setAttribute("id", "mydiv");
        // item.src = '../assets/rose.png';
        // selection.parentNode.replaceChild(item, selection);
    }
}


dragElement(rose);
dragElement(tulip);
dragElement(daisy);
dragElement(lily);
dragElement(poppy);

