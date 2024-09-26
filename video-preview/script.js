console.log("page loaded...");

function playVideo(videoSmall1){
    //video.play();
    var videoGrande = document.getElementById("videoGrande");
    var temp = videoGrande.src;
    videoGrande.src = videoSmall1.src;
    videoGrande.play();
    videoSmall1.src = temp;
}

function pauseVideo(video){
    //video.pause();
    //video.currentTime = 0; vuelve el video al inicio
    var videoGrande = document.getElementById(videoGrande);
    var tempSrc = videoSmall1.src;
    videoSmall1.src = videoGrande.src;
    videoGrande.play();
    videoGrande.src = temp.src;
}
