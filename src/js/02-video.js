import VimeoPlayer from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");

if (savedTime) {
        player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
    }