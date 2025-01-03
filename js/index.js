import { generate } from './game.js';
import { render } from './render.js';
import { countdown } from './countdown.js';

function startGame() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden', 'game-over');
    let letters = generate();
    let table = render(letters);
    document.getElementsByTagName('table')[0].remove();
    document.getElementById('game-screen').appendChild(table);
    countdown(function(time) {
        document.getElementById('countdown').textContent = time;
    }, function() {
        // document.getElementById('game-screen').classList.add('hidden');
        // document.getElementById('game-over-screen').classList.remove('hidden');
        document.getElementById('game-screen').classList.add('game-over');
    });
}

document.getElementById('go-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', startGame);
