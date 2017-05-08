document.getElementById("bjarni1").addEventListener("click", playBjarni1);
document.getElementById("bjarni2").addEventListener("click", playBjarni2);
document.getElementById("bjarni3").addEventListener("click", playBjarni3);

function playBjarni1() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni1.mp3");
    snd.play();
}

function playBjarni2() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni2.mp3");
    snd.play();
}

function playBjarni3() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni-UEEAAA.wav");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
