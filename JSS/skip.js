document.querySelectorAll('audio').forEach((audio, index, audioList) => {
    audio.addEventListener('play', function() {
        // Pause all other audio elements when this one is played
        document.querySelectorAll('audio').forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0; // Optional: Reset other audio
            }
        });
    });

    audio.addEventListener('ended', function() {
        // Play the next audio element if available
        const nextAudio = audioList[index + 1];
        if (nextAudio) {
            nextAudio.play().catch(error => {
                console.error("Playback failed:", error);
            });
        }
    });
});

function skipAudio(seconds, audioId) {
    // Get the audio element by ID
    const audio = document.getElementById(audioId);
    if (audio) {
        // Calculate the new current time
        const newTime = audio.currentTime + seconds;
        // Ensure the new time is within valid bounds
        audio.currentTime = Math.max(0, Math.min(audio.duration, newTime));
        
        // Play the selected audio if it was paused
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Playback failed:", error);
            });
        }
    } else {
        console.error(`Audio element with ID "${audioId}" not found.`);
    }
}

// Back Button
function goBack() {
    window.history.back();
}
