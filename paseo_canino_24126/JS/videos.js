document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var playPauseBtn = document.getElementById('play-pause-btn');
    var muteBtn = document.getElementById('mute-btn');

    // Agregar evento de clic al botón de control de reproducción/pausa
    playPauseBtn.addEventListener('click', function() {
        // Obtener el elemento del video
        var videoPlayer = document.getElementById('video-player');

        // Verificar si el video está pausado o reproduciéndose y cambiar el estado en consecuencia
        if (videoPlayer.paused || videoPlayer.ended) {
            videoPlayer.play();
            playPauseBtn.textContent = 'Pausar';
        } else {
            videoPlayer.pause();
            playPauseBtn.textContent = 'Reproducir';
        }
    });

    // Agregar evento de clic al botón de control de silencio
    muteBtn.addEventListener('click', function() {
        // Obtener el elemento del video
        var videoPlayer = document.getElementById('video-player');

        // Verificar si el video está silenciado o no y cambiar el estado en consecuencia
        if (videoPlayer.muted) {
            videoPlayer.muted = false;
            muteBtn.textContent = 'Silenciar';
        } else {
            videoPlayer.muted = true;
            muteBtn.textContent = 'Activar Sonido';
        }
    });
});
