
const fromKey = 'from'
const textKey = 'text'
const nameKey = 'name'
const sendB = document.querySelector('#confirm')
const from = document.querySelector('#from').value.trim();
const text = document.querySelector('#text').value.trim();
const nameV = document.querySelector('#name').value.trim();


sendB.addEventListener('click', () => {
    let textFrom = document.createElement('p');
    let textText = document.createElement('p');
    let textName = document.createElement('p');

    textFrom.innerHTML = from;
    textText.innerHTML = text;
    textName.innerHTML = nameV;
    localStorage.setItem(fromKey, textName.innerHTML);
});