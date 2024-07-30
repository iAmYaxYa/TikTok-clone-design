const videoPlayers = document.querySelectorAll(".videoPlayer");
const buttonLikes = document.querySelectorAll(".like");

// PLAY AND PAUSE
videoPlayers.forEach((videoPlayer) => {
  videoPlayer.addEventListener("click", () => {
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
      videoPlayer.nextElementSibling.classList.add("show");
    } else {
      videoPlayer.play();
      videoPlayer.nextElementSibling.classList.remove("show");
    }
  });
});

// LIKES
buttonLikes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("love");
  });
});
