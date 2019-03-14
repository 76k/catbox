
var ls=document.getElementsByClassName("mus")[0];
var Audio=document.getElementsByTagName("audio")[0];
var first = document.getElementById("first")
var key = true;
 ls.onclick =function(){
   if(key){
    Audio.play();
    first.style.background="url(./img/bofang2.png)11px 5px no-repeat";
    key = false;
    
   }else{
    Audio.pause();
    first.style.background="url(./img/bofang.png)11px 5px no-repeat"
     key = true;
  }
   
 }
 
// 我的秘密
var Why=document.getElementById('why');
console.log(Why);
var btn=document.getElementById("btn")
console.log(btn)
var who=true;
btn.addEventListener("click",function(){
 Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//遗书
document.getElementById("book").addEventListener("click",function(){
  Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//寒鸦少年
document.getElementById("less").addEventListener("click",function(){
  Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//让我留在你身边
document.getElementById("aotu").addEventListener("click",function(){
  Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//像我这样的人
document.getElementById("mby").addEventListener("click",function(){
  Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//意外
document.getElementById("yiwai").addEventListener("click",function(){
  Why.src=this.getAttribute("data");
  if(who){
    Why.play();
    who=false;
  }else{
    Why.pause();
    who=true;
  }
},false)
//张杰图片切换开始
function mouseOver(){
  document.b1.src="img/zhangjie2.jpg"
  b1.style="cursor:pointer;"
}
function mouseOut(){
  document.b1.src="img/zhangjie.jpg"
}



//我的秘密 tupian
var key2 = true;
var btn=document.getElementById("btn")
btn.onclick=function(){
  if(key2){
    btn.style.background="url(./img/mm1_2.png)";
    key2 = false;
    // console.log("暂停", key2)
  }else{
    btn.style.background="url(./img/mm1.png)";
    key2 = true;
    // console.log("开始", key2)
  }
}
//遗书bf
document.getElementById("book").onclick=function(){
  if(key2){
    book.style.background="url(./img/dianji_2.png)";
    key2=false;
    console.log("开始")
  }else{
    book.style.background="url(./img/dianji.png)";
    key2=true
    console.log('暂停')
  }
}
//寒鸦少年


