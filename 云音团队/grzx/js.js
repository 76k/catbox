document.getElementById("star");
document.getElementById("warp")
document.getElementById("shanchu");
document.getElementById("video1");

star.onclick = function(){
    warp.style.display = "block";
    video1.play();
  }
 shanchu.onclick = function(){
   warp.style.display = "none";
   video1.pause();
 } 
