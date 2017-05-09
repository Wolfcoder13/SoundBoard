document.getElementById("bjartur1").addEventListener("click", playBjartur1);
document.getElementById("bjartur2").addEventListener("click", playBjartur2);


function playBjartur1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "Bjartur-ohohohohh.wav");
    snd.play();
}

function playBjartur2() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjartur-stopCallingMeVaginaBuj.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
