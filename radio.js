const audioPlayer = document.getElementById('audio-player');
const playlistItems = document.querySelectorAll('.playlist li');

playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        const songSrc = item.getAttribute('data-song');
        audioPlayer.src = songSrc;
        audioPlayer.play();
        updateSongInfo(item.textContent, item.dataset.artist);
    });
});

audioPlayer.addEventListener('play', () => {

});

audioPlayer.addEventListener('pause', () => {

});

function updateSongInfo(songName, artistName) {
    const songInfo = document.querySelector('.song-info');
    songInfo.querySelector('h2').textContent = songName;
    songInfo.querySelector('p').textContent = artistName;
}



const previousButton = document.getElementById('previous-button');
const playPauseButton = document.getElementById('play-pause-button');
const nextButton = document.getElementById('next-button');
let currentSongIndex = 0;

playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentSongIndex = index;
        playSelectedSong(item);
    });
});

previousButton.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        playSelectedSong(playlistItems[currentSongIndex]);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSongIndex < playlistItems.length - 1) {
        currentSongIndex++;
        playSelectedSong(playlistItems[currentSongIndex]);
    }
});

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

audioPlayer.addEventListener('play', () => {

});

audioPlayer.addEventListener('pause', () => {

});

function updateSongInfo(songName, artistName) {
    const songInfo = document.querySelector('.song-info');
    songInfo.querySelector('h2').textContent = songName;
    songInfo.querySelector('p').textContent = artistName;
}

function playSelectedSong(item) {
    const songSrc = item.getAttribute('data-song');
    audioPlayer.src = songSrc;
    audioPlayer.play();
    updateSongInfo(item.textContent, item.dataset.artist);
}
