const welcomeIf = document.getElementById('welcome-if');
const name = "Ifeoluwa";
const greeting = "Welcome to the counter app, ";
const saveEl = document.getElementById('save-el');
const countDisplay = document.getElementById('count-display')

welcomeIf.innerText = `${greeting} ${name} 👋`

let count = 0;
function increment() {
    count++;
    countDisplay.innerText = count;
    handleColor()
}
function decrement() {
    count--;
    document.getElementById('count-display').innerText = count;
    handleColor()
}
function reset() {
    count = 0;
    document.getElementById('count-display').innerText = count;
    document.getElementById('save-el').textContent =  "Previous entries: ";
    handleColor()
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    document.getElementById('count-display').textContent = 0;
}

function handleColor() {
    if(count > 0) {
        countDisplay.style.color = "rgb(2, 50, 2)"
    } else if (count < 0) {
        countDisplay.style.color = "rgb(142, 2, 2)"
    } else {
        countDisplay.style.color = "rgb(0, 0, 0)"
    }
}