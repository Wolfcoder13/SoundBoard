document.getElementById("birgir1").addEventListener("click", playBirgir1);
document.getElementById("birgir2").addEventListener("click", playBirgir2);
document.getElementById("birgir3").addEventListener("click", playBirgir3);
document.getElementById("birgir4").addEventListener("click", playBirgir4);
document.getElementById("birgir5").addEventListener("click", playBirgir5);

function playBirgir1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "birgir1.mp3");
    snd.play();
}

function playBirgir2() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-AAEEBeeeee.wav");
    snd.play();
}

function playBirgir3() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-peewviu.wav");
    snd.play();
}

function playBirgir4() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-eeeeeb.wav");
    snd.play();
}

function playBirgir5() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-æjó.wav");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
