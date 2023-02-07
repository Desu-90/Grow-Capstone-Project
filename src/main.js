const init = () => {
    const button1 = document.querySelector("#Button1");
    const button2 = document.querySelector("#Button2");
    const button3 = document.querySelector("#Button3");
    const animation = anime({
        targets: 'div',
        left: '240px',
        backgroundColor: '#FFF333',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
    });

    button1.addEventListener('click', () => {
        
    });
    button2.addEventListener('click', () => {

    });
    button3.addEventListener('click', () => {

    });
};

window.onload = init;