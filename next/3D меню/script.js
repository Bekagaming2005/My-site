document.addEventListener('DOMContentLoaded', () => {

  // ВИДЕО
  const videos = document.querySelectorAll('.video-block');

  videos.forEach(video => {
      video.muted = true;
      video.addEventListener('mouseover', () => {
          video.muted = true; 
          video.play();
      });
      video.addEventListener('mouseout', () => {
          video.pause();
      });
  });
  //

  // СКАЧАТЬ ФАЙЛ
  const downloadButtons = document.querySelectorAll('.download');

  downloadButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filePath = button.getAttribute('data-filepath');
          const link = document.createElement('a');
          link.href = filePath;
          link.click();
      });
  });
  //

});
