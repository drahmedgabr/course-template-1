const ramadanSong = new Audio("https://naghma.naghma.mobi/uploads/songs/Ramadan/Wa7wy_Ya_Wa7wy.mp3");
const body = document.body;

body.addEventListener('mouseover', () => {
    ramadanSong.play();
});