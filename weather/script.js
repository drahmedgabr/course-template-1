const onclickDiv = document.getElementById("onclickDiv");
const mainDiv = document.getElementById("mainDiv");
const buttonDiv = document.getElementById("buttonDiv")
const winterDiv = document.getElementById("winterDiv");


function weatherChange() {
    onclickDiv.style.display = "none";
    mainDiv.style.display = "none";
    buttonDiv.style.display ="block";
    winterDiv.style.display = "block";
}


function backWeather() {
    buttonDiv.style.display ="none";
    winterDiv.style.display = "none"
    onclickDiv.style.display = "block";
    mainDiv.style.display = "block";

}