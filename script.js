document.getElementById('audioUpload').addEventListener('change', function(event) {
    const soundboard = document.getElementById('soundboard');
    soundboard.innerHTML = ''; // Clear existing buttons

    const files = event.target.files;
    Array.from(files).forEach(file => {
        const audioURL = URL.createObjectURL(file);
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = file.name;
        button.onclick = () => {
            const audio = new Audio(audioURL);
            audio.play();
        };
        soundboard.appendChild(button);
    });
});
