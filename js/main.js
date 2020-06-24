window.onload = function removeIconPreview() {
  document.getElementById("preview1").classList.add("hidden");
  document.getElementById("preview2").classList.add("hidden");
  document.getElementById("preview3").classList.add("hidden");
};

document.getElementById("button1").onclick = function button1() {
  setTimeout(setVideo1, 3000);
  setTimeout(setFade1, 3000);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("animateGif").style.display = "none";
  document.getElementById("button1").classList.add("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
  document.getElementById("button1").style.backgroundColor = "deepskyblue";
  document.getElementById("button2").style.backgroundColor = null;
  document.getElementById("button3").style.backgroundColor = null;
  document.getElementById("preview1").classList.add("hidden");
  document.getElementById("preview2").classList.remove("hidden");
  document.getElementById("preview3").classList.remove("hidden");
};

function setVideo1() {
  document.getElementById("video").src = "./img/anim1.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo1, 1000);
}

function playVideo1() {
  document.getElementById("video").play();
}

function setFade1() {
  document.getElementById("transition").classList.add("fade-out");
  document.getElementById("transition").style.opacity = "0";
}

document.getElementById("button2").onclick = function button2() {
  setTimeout(setVideo2, 3000);
  setTimeout(setFade2, 3000);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("animateGif").style.display = "none";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("button2").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
  document.getElementById("button1").style.backgroundColor = null;
  document.getElementById("button2").style.backgroundColor = "deepskyblue";
  document.getElementById("button3").style.backgroundColor = null;
  document.getElementById("preview1").classList.remove("hidden");
  document.getElementById("preview2").classList.add("hidden");
  document.getElementById("preview3").classList.remove("hidden");
};

function setVideo2() {
  document.getElementById("video").src = "./img/anim2.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo2, 1000);
}

function playVideo2() {
  document.getElementById("video").play();
}

function setFade2() {
  document.getElementById("transition").style.opacity = "0";
  document.getElementById("transition").classList.add("fade-out");
}

document.getElementById("button3").onclick = function button3() {
  setTimeout(setVideo3, 3000);
  setTimeout(setFade3, 3000);
  document.getElementById("transition").play();
  document.getElementById("video").pause();
  document.getElementById("transition").style.opacity = "100";
  document.getElementById("transition").classList.add("fade-in");
  document.getElementById("transition").classList.remove("fade-out");
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("animateGif").style.display = "none";
  document.getElementById("button3").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("button1").style.backgroundColor = null;
  document.getElementById("button2").style.backgroundColor = null;
  document.getElementById("button3").style.backgroundColor = "deepskyblue";
  document.getElementById("preview1").classList.remove("hidden");
  document.getElementById("preview2").classList.remove("hidden");
  document.getElementById("preview3").classList.add("hidden");
};

function setVideo3() {
  document.getElementById("video").src = "./img/anim3.mp4";
  document.getElementById("video").classList.add("fade-in");
  setTimeout(playVideo3, 1000);
}

function playVideo3() {
  document.getElementById("video").play();
}

function setFade3() {
  document.getElementById("transition").style.opacity = "0";
  document.getElementById("transition").classList.add("fade-out");
}
