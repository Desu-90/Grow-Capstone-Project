let menu = [...document.querySelectorAll(".menuItem")];
let draggable = document.querySelector("#draggable");
let canvas = document.querySelector("#canvas");
let flowers = document.querySelectorAll('#anemone, #aspen, #baby, #birch, #daisy, #delphinium, #lilly, #merigold, #palma, #poppy, #sunflower, #tulip, #violet');

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // otherwise, move the DIV from anywhere inside the DIV:
    let isCloned = false;

    function createClone(flower) {
        return flower.cloneNode(true);
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        if (!isCloned) {
            const clone = createClone(elmnt);
            draggable.appendChild(clone);
            dragElement(clone);
            isCloned = true;
        }
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
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
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if (pos3 >= 10) {
            switch (elmnt.id) {
                case "rose":
                    elmnt.innerHTML = '<img class="flower" src="../assets/roseF.png" id="item">';
                    elmnt.style.width = '150px';
                    elmnt.style.overflow = 'hidden';
                    console.log("I work 2");
                    break;
                case "tulip":
                    elmnt.innerHTML = '<img src="../assets/tulip.png" id="item">';
                    elmnt.style.width = '150px';
                    break;
                case "daisy":
                    elmnt.innerHTML = '<img src="../assets/daisyF.png" id="item">';
                    elmnt.style.width = '150px';
                    break;
                case "lily":
                    elmnt.innerHTML = '<img src="../assets/lily.png" id="item">';
                    elmnt.style.width = '150px';
                    break;
                case "poppy":
                    elmnt.innerHTML = '<img src="../assets/poppy.png" id="item">';
                    elmnt.style.width = '150px';
                    break;
            }
        }
    }

    function closeDragElement() {
        document.onpointerup = null;
        document.onpointermove = null;
        canvas.append(elmnt);
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
