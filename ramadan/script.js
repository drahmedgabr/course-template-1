const ramadanSong = new Audio("https://naghma.naghma.mobi/uploads/songs/Ramadan/Wa7wy_Ya_Wa7wy.mp3");
const playBtn = document.getElementById("playBtn");
var playing = false;

function playSong() {
    if(playing == false){
        switchIcon();
        playing = true;
        ramadanSong.play();
    } else {
        switchIcon();
        playing = false;
        ramadanSong.pause();
    }
}

function switchIcon() {
    playBtn.classList.toggle("bi-play-circle-fill");
    playBtn.classList.toggle("bi-pause-circle-fill");
}