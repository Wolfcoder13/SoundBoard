document.getElementById("andri1").addEventListener("click", playAndri1);

function playAndri1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "andri1.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
