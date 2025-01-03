const game_time = 180;
let interval;

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export function countdown(updateCallback, completeCallback) {
    var time = game_time;
    updateCallback(formatTime(time));
    clearInterval(interval);
    interval = setInterval(function() {
        time--;
        updateCallback(formatTime(time));
        if (time === 0) {
            clearInterval(interval);
            completeCallback();
        }
    }, 1000);
}