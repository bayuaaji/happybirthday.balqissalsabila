document.getElementById('revealButton').addEventListener('click', function() {
    var letter = document.querySelector('.letter');
    letter.style.display = 'block';
    this.style.display = 'none';
    animateLoveMeter();
});

function animateLoveMeter() {
    var loveMeter = document.querySelector('.love-meter');
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            loveMeter.style.width = width + '%';
        }
    }, 10);
}
