var videos = [];
var slideimages = null;
var lastScrollY = 0;
var ticking = false;

window.addEventListener("DOMContentLoaded", () => {
    // add parallax effect
    slideimages = document.querySelectorAll("#titelbild .field__item img, #titelbild .field__item video");
    if (window.innerWidth > 500) { // no mobile because of lagging
        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    parallax(lastScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // video constrols
    // guideline: https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player
    videos = Array.from(document.querySelectorAll('#titelbild video'));
    for (let i = 0; i < videos.length; i++) {
        let videoContainer = videos[i].parentNode; // .field__item : contains <video> and .video-controls
        videoContainer.getElementsByClassName("play")[0].addEventListener("click", togglePlayback);
        videoContainer.getElementsByClassName("unmute")[0].addEventListener("click", toggleMute);
        videoContainer.getElementsByClassName("volinc")[0].addEventListener("click", (e) => { changeVolume(e, 1); });
        videoContainer.getElementsByClassName("voldec")[0].addEventListener("click", (e) => { changeVolume(e, -1); });
        if (!document?.fullscreenEnabled) {
            videoContainer.getElementsByClassName("fullscreen")[0].style.display = "none";
        } else {
            videoContainer.getElementsByClassName("fullscreen")[0].addEventListener("click", toggleFullscreen);
        }
    }
});

function parallax(scrollY) {
    slideimages.forEach((slideimage) => {
        slideimage.style.top = 0.5 * scrollY + 'px';
    });
}

function getVideoContainer_Video(target) {
    var videoContainer = target;
    while (!videoContainer.classList.contains("field__item")) {
        videoContainer = videoContainer.parentNode;
    }
    let video = videoContainer.getElementsByTagName("video")[0];
    return [videoContainer, video];
}

function toggleControl(videoContainer, control_ClassBefore, control_ClassAfter, control_TitleAfter) {
    videoContainer.getElementsByClassName(control_ClassBefore)[0].innerText = control_TitleAfter;
    videoContainer.getElementsByClassName(control_ClassBefore)[0].classList.add(control_ClassAfter);
    videoContainer.getElementsByClassName(control_ClassAfter)[0].classList.remove(control_ClassBefore);
}

var slideshowButtons = null;
var banner = null;
async function toggleOverlay(show = true) {
    if (slideshowButtons === null) {
        slideshowButtons = document.querySelector("#titelbild .button-container");
        banner = document.querySelector("#herobox");
    }
    if (show) {
        slideshowButtons.style.display = "";
        banner.style.display = "";
        slideshowButtons.classList.remove("slideshow-hidden");
        banner.classList.remove("slideshow-hidden");
    } else {
        slideshowButtons.classList.add("slideshow-hidden");
        banner.classList.add("slideshow-hidden");
        await new Promise(resolve => setTimeout(resolve, 1000)); // sleep for 1 second
        slideshowButtons.style.display = "none";
        banner.style.display = "none";
    }
}

function togglePlayback(event) {
    let [videoContainer, video] = getVideoContainer_Video(event.target);
    if (video.paused || video.ended) {
        videos.forEach((v) => { v.pause(); }); // only one video can play at a time
        video.play();
        toggleOverlay(false);
        toggleControl(videoContainer, "play", "pause", "Anhalten");
        video.addEventListener("ended", () => {
            toggleOverlay();
            toggleControl(videoContainer, "pause", "play", "Abspielen");
        })
    } else {
        video.pause();
        toggleOverlay();
        toggleControl(videoContainer, "pause", "play", "Abspielen");
    }
}

function toggleMute(event) {
    let [videoContainer, video] = getVideoContainer_Video(event.target);
    if (video.muted) {
        toggleControl(videoContainer, "unmute", "mute", "Ton aus");
    } else {
        toggleControl(videoContainer, "mute", "unmute", "Ton ein");
    }
    video.muted = !video.muted;
}

function changeVolume(event, factor) {
    let [videoContainer, video] = getVideoContainer_Video(event.target);
    var volume = video.volume;
    volume += 0.1 * factor;
    if (volume > 1.0) {
        volume = 1.0;
    } else if (volume <= 0.0) {
        volume = 0.1;
        toggleMute({ target: videoContainer });
    }
    video.volume = volume;
}

var fullscreenVideoContainer = null;
function setFullscreenData(state) {
    fullscreenVideoContainer.setAttribute("data-fullscreen", !!state);
}

function toggleFullscreen(event) {
    let [videoContainer, _] = getVideoContainer_Video(event.target);
    if (document.fullscreenElement !== null) {
        // The document is in fullscreen mode
        document.exitFullscreen();
        setFullscreenData(false);
    } else {
        // The document is not in fullscreen mode
        videoContainer.requestFullscreen();
        fullscreenVideoContainer = videoContainer;
        setFullscreenData(true);
    }
}

document.addEventListener("fullscreenchange", (e) => {
    setFullscreenData(!!document.fullscreenElement);
});

