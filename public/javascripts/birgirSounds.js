document.getElementById("birgir1").addEventListener("click", playBirgir1);
document.getElementById("birgir2").addEventListener("click", playBirgir2);
document.getElementById("birgir3").addEventListener("click", playBirgir3);
document.getElementById("birgir4").addEventListener("click", playBirgir4);
document.getElementById("birgir5").addEventListener("click", playBirgir5);
document.getElementById("birgir6").addEventListener("click", playBirgir6);
document.getElementById("birgir7").addEventListener("click", playBirgir7);
document.getElementById("birgir8").addEventListener("click", playBirgir8);
document.getElementById("birgir9").addEventListener("click", playBirgir9);
document.getElementById("birgir10").addEventListener("click", playBirgir10);
document.getElementById("birgir11").addEventListener("click", playBirgir11);

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

function playBirgir6() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-greindavísitölur.mp3");
    snd.play();
}

function playBirgir7() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-fullnægingMeðBjarna.mp3");
    snd.play();
}

function playBirgir8() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-RipHeadphones.mp3");
    snd.play();
}

function playBirgir9() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-orgasm.mp3");
    snd.play();
}

function playBirgir10() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-nobb.mp3");
    snd.play();
}

function playBirgir10() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Birgir-goldenVoice.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
