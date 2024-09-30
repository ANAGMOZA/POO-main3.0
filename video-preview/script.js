console.log("page loaded...");

function playVideo(videoSmall){
    var videoGrande = document.getElementById("videoGrande");
    var temp = videoGrande.src;
    videoGrande.src = videoSmall.src;
    videoGrande.play();
    videoSmall.src = temp;
    
    // Actualiza el título del video grande
    var videoTitle = document.getElementById("tituloGrande");
    var newTitle = videoSmall.parentElement.querySelector(".video-title").textContent;
    console.log(newTitle);
    console.log(videoTitle);
    videoTitle.textContent = newTitle;
    newTitle.parentElement.querySelector(".video-title").textContent = videoTitle.textContent;
}

function pauseVideo(){
    var videoGrande = document.getElementById("videoGrande");
    var tempSrc = videoGrande.src;
    videoGrande.src = tempSrc;
    videoGrande.pause();
}