const joe1 = document.getElementById('joe1');
const joe2 = document.getElementById('joe2');
const joe3 = document.getElementById('joe3');
const joe4 = document.getElementById('joe4');
const joe5 = document.getElementById('joe5');
const joe6 = document.getElementById('joe6');
const joe7 = document.getElementById('joe7');
const joe8 = document.getElementById('joe8');
const joe9 = document.getElementById('joe9');

const pipe1 = document.getElementById('pipe1');
const pipe2 = document.getElementById('pipe2');
const pipe3 = document.getElementById('pipe3');
const pipe4 = document.getElementById('pipe4');
const pipe5 = document.getElementById('pipe5');
const pipe6 = document.getElementById('pipe6');
const pipe7 = document.getElementById('pipe7');
const pipe8 = document.getElementById('pipe8');
const pipe9 = document.getElementById('pipe9');

const joe = [joe1, joe2, joe3, joe4, joe5, joe6, joe7, joe8, joe9];
const pipe = [pipe1, pipe2, pipe3, pipe4, pipe5, pipe6, pipe7, pipe8, pipe9];

const scoreDisplay = document.getElementById('score');

let score = 0;
let DelayJoe = 2000;
let timeWhileJoed = 1500;
let maxJoesOnMap = 5;
let joesGenerated = 0;

const joesOnMap = [];

for (let i = 0; i < joe.length; i++) {
    joe[i].style.display = 'none';
    joe[i].addEventListener('click', () => JoeClicked(joe[i]));
}

function GenerateJoe() {
    if (joesGenerated >= maxJoesOnMap) {
        joesOnMap.length = 0;
        joesGenerated = 0;
    }

    let joeIndex = Math.floor(Math.random() * joe.length);
    let pipeRect = pipe[joeIndex].getBoundingClientRect();

    let randomLeft = Math.random() * (pipeRect.width - joe[joeIndex].width);
    let randomTop = Math.random() * (pipeRect.height - joe[joeIndex].height);

    joe[joeIndex].style.left = pipeRect.left + 'px';
    joe[joeIndex].style.top = pipeRect.top + 'px';

    if (joesOnMap.includes(joeIndex)) {
        GenerateJoe();
    }

    joesOnMap.push(joeIndex);
    joesGenerated++;
    joe[joeIndex].style.display = 'block';

    setTimeout(() => {
        joe[joeIndex].style.display = 'none';
    }, timeWhileJoed);
}

function JoeClicked(clickedJoe) {
    score++;
    scoreDisplay.innerHTML = `Score: ${score}`;
    clickedJoe.style.display = 'none';
    GenerateJoe();
}

GenerateJoe();

setInterval(() => {
    GenerateJoe();
}, DelayJoe);
