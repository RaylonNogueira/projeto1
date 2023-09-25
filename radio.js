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
    // Atualizar a interface quando a música for reproduzida.
});

audioPlayer.addEventListener('pause', () => {
    // Atualizar a interface quando a música for pausada.
});

function updateSongInfo(songName, artistName) {
    const songInfo = document.querySelector('.song-info');
    songInfo.querySelector('h2').textContent = songName;
    songInfo.querySelector('p').textContent = artistName;
}
