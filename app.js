const inputEl = document.getElementById ('input');
const buttonOneEl = document.getElementById ('buttonOne');
const buttonTwoEl = document.getElementById ('buttonTwo');
const nameEl = document.getElementById ('name');
const pronounsEl = document.getElementById ('pronouns');
console.log (inputEl)
console.log (nameEl)

buttonOneEl.addEventListener('click', () => {
    const wordsTyped = inputEl.value;
    nameEl.textContent = wordsTyped;
});

buttonTwoEl.addEventListener('click', () => {
    const wordsTyped = inputEl.value;
    pronounsEl.textContent = wordsTyped;
});

const pinkEl = document.getElementById ('pink');
const blueEl = document.getElementById ('lightBlue');
const greenEl = document.getElementById ('lightGreen');

console.log (pinkEl);
console.log (blueEl);
console.log (greenEl);

document.getElementById ('pink').style.color = '#ffc0cb';
document.getElementById ('lightGreen').style.color ='#90ee90';
document.getElementById ('lightBlue').style.color ='#add8e6';

const topBoxEl = document.getElementById ('redBoxTop');
const bottomBoxEl = document.getElementById ('redBoxBottom');

pinkEl.addEventListener('click', () => {
    topBoxEl.style.backgroundColor = '#ffc0cb';
});

pinkEl.addEventListener('click', () => {
    bottomBoxEl.style.backgroundColor = '#ffc0cb';
});

greenEl.addEventListener('click', () => {
    topBoxEl.style.backgroundColor = '#90ee90';
});

greenEl.addEventListener('click', () => {
    bottomBoxEl.style.backgroundColor = '#90ee90';
});

blueEl.addEventListener('click', () => {
    topBoxEl.style.backgroundColor = '#add8e6';
});

blueEl.addEventListener('click', () => {
    bottomBoxEl.style.backgroundColor = '#add8e6';
});