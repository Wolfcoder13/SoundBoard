document.getElementById("bjarni1").addEventListener("click", playBjarni1);
document.getElementById("bjarni2").addEventListener("click", playBjarni2);
document.getElementById("bjarni3").addEventListener("click", playBjarni3);
document.getElementById("bjarni4").addEventListener("click", playBjarni4);
document.getElementById("bjarni5").addEventListener("click", playBjarni5);
document.getElementById("bjarni6").addEventListener("click", playBjarni6);
document.getElementById("bjarni7").addEventListener("click", playBjarni7);

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

function playBjarni4() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni-planetEarth.mp3");
    snd.play();
}

function playBjarni5() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni-ohhh.mp3");
    snd.play();
}

function playBjarni6() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni-ehh.mp3");
    snd.play();
}

function playBjarni7() {
    var path = "..\\sounds\\"
    var snd = new Audio(path + "bjarni - please.mp3");
    snd.play();
}

function PlaySound(melody) {
  var path = "..\\sounds\\melody\\"
  var snd = new Audio(path + melody + ".mp3");
  snd.play();
}
