
//jshint esversion:6

const video = document.getElementById('video');
const play = document.getElementById('play');
const Stop = document.getElementById('stop');
const progress= document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//play & pause
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//update icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML='<i class="fa fa-play fa-2x"></i>';
    } else {
          play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
    }
}

//update timestamp & progerss
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
  //get the minutes
    var min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        mins = '0' + String(min);
    }
   //get the secs
    var secs = Math.floor(video.currentTime % 60);
    if (secs< 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${ min }: ${ secs }`;
}  

//set vedio progress
function setVedioProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//stop vedio
function stopVedio() {
    video.currrentTime = 0;
    video.pause();
}
//EventListerners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

Stop.addEventListener('click', stopVedio);

progress.addEventListener('change', setVedioProgress);