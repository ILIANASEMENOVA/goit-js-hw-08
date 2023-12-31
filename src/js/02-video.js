import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const currentTime = localStorage.getItem(STORAGE_KEY);
// player.setCurrentTime(currentTime);
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
