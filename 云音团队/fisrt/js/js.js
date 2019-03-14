// 背景音乐
var effect = document.getElementById("effect");
console.log(effect)
var btns = document.getElementById("btns");
effect.setAttribute('autoplay','autoplay')
function playGo(){
  console.log(effect.paused)
  effect.src=this.getAttribute("data-url");
  if(effect.getAttribute('data-player') === 'false'){
    effect.pause()
    effect.setAttribute('data-player','true')
  }else{
    effect.play()
    effect.setAttribute('data-player','false')
  }
}
btns.addEventListener("click",function(){
  effect.pause()
},false)
// /播放图片切换/
var player = document.getElementById("player");
var sao =document.getElementById("sao")
var cant = 1;
player.onclick = function(){
  if(cant == 1){
    cant = 2;
    player.src="./img/bofang.png"
    sao.style.display = "none"
  }else{
    cant = 1;
    player.src="./img/bofang2.png"
    sao.style.display = "block"
  }

} 
//手机播放歌曲
  uyt = 1;
player.addEventListener("click",function(){
  effect.src=this.getAttribute("data-url");
 
  if(uyt==1){
   effect.play()
    uyt = 2
  }else{
    effect.pause();
     uyt = 1;
  }
})
