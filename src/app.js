const init = () => {
    const obj = document.querySelector("#test");
    const extras = document.querySelector("#extras");

    const doSomething = (e) => {
        e.preventDefault();
        console.log('red');
    }

    obj.addEventListener('click', doSomething)
}

window.onload = init;