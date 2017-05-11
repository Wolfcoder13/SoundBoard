document.getElementById("andri1").addEventListener("click", playAndri1);
document.getElementById("andri2").addEventListener("click", playAndri2);
document.getElementById("andri3").addEventListener("click", playAndri3);

function playAndri1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "andri1.mp3");
    snd.play();
}

function playAndri2() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Andri-pempía.mp3");
    snd.play();
}

function playAndri3() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Andri-Gongbonger.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
