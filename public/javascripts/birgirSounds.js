document.getElementById("birgir1").addEventListener("click", playBirgir1);

function playBirgir1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "birgir1.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
