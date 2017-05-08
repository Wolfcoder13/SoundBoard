document.getElementById("bjarni1").addEventListener("click", playBjarni1);

function playBjarni1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni1.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
