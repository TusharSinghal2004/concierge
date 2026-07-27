export function openDemoFullscreen() {
  const video = document.getElementById("demo-video");

  if (!video) return;

  video.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  if (video.requestFullscreen) {
    video.requestFullscreen();
    return;
  }

  if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
    return;
  }

  if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}