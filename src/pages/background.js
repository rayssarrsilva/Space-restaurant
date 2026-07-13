import videoImport from "../assets/gifs/spaceMoving.mp4";

export default function createBackground(){
    const video = document.createElement("video");

    video.id = "video";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.src = videoImport;

    document.body.appendChild(video);
};