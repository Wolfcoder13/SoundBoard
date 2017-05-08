document.getElementById("olgeir1").addEventListener("click", playOlgeir1);

function playOlgeir1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "olgeir1.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
