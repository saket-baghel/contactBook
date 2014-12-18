
    $(document).ready(function() {
        $('.deleteButton').click(function() {
		var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'deleteSound.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        });
    });
