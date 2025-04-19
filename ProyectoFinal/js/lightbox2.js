function ejecutar(div, video_id) {
    const iframe = document.getElementById(video_id);
    const videoSrc = iframe.getAttribute('data-src');
    iframe.src = videoSrc + '&autoplay=1';
    document.getElementById(div).style.display = 'flex';
    document.body.classList.add('no-scroll');
  }
  
  function ocultar(div, video_id) {
    const iframe = document.getElementById(video_id);
    iframe.src = '';
    document.getElementById(div).style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
  

