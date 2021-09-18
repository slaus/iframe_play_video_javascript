window.addEventListener('DOMContentLoaded', () => {
    const playVideo = () => {
        const frameVideoWidth = 560,
            frameVideoHeight = 315,
            frameVideoCode = '2qRQf00C5JU';

        const blockVideo = document.querySelector('.main-video__frame'),
            video = document.getElementById('video'),
            play = document.getElementById('play'),
            coefficient = blockVideo.offsetWidth / frameVideoWidth;

        blockVideo.style.height = frameVideoHeight * coefficient + 'px';

        play.addEventListener('click', () => {
            play.style.display = 'none';
            video.style.display = 'block';
            video.style.width = blockVideo.offsetWidth + 'px';
            video.style.height = frameVideoHeight * coefficient + 'px';
            video.src = `https://www.youtube.com/embed/${frameVideoCode}?autoplay=1`;
        });
    };

    playVideo();

    window.addEventListener('resize', () => {
        playVideo();
    });
});
