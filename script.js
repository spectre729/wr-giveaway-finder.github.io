document.querySelectorAll('.media-frame').forEach((frame) => {
  const video = frame.querySelector('video.media');
  if (!video) return;
  video.addEventListener('loadeddata', () => frame.classList.add('has-media'));
});
