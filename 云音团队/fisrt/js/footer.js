var logos = document.getElementById("logos")
console.log(logos)
var fours = document.getElementById("fours")
console.log(fours)
var last1 = document.getElementById("last1")
console.log(last1)
var show1 =document.getElementById("show1")
console.log(show1)
var showlist = document.getElementById("showlist")
console.log(showlist)
var show2 =document.getElementById("show2")
console.log(show2)
var show3 =document.getElementById("show3")
console.log(show3)
var show4 =document.getElementById("show4")
console.log(show4)
// show1
var why =true;
last1.onclick = function(){
  if(why){
    logos.style.transform="translatex(-500px)"
    logos.style.opacity="0"
    fours.style.transform="translatex(500px)"
    fours.style.opacity = "0"
    last1.style.transform = "translate(280px,-410px)"
    showlist.style.opacity ="1"
    show1.style.opacity ="1"
    show1.style.transform ="translatey(20px)"
    show2.style.opacity ="0"
    
    why = false;
  }else{
    logos.style.transform="translatex(0px)"
    logos.style.opacity="1"
    fours.style.transform="translatex(0px)"
    fours.style.opacity = "1"
    last1.style.transform = "translate(0,0)"
    showlist.style.opacity ="0"
    show1.style.opacity ="0"
    show1.style.transform ="translatex(0px)"
    
    why =true;
  }
}

// show2
var last2 =document.getElementById("last2")
console.log(last2)
last2.onclick = function(){
  if(why){
    logos.style.transform="translatex(-500px)"
    logos.style.opacity="0"
    fours.style.transform="translatex(500px)"
    fours.style.opacity = "0"
    last2.style.transform = "translate(100px,-410px)"
    showlist.style.opacity ="1"
    show2.style.opacity ="1"
    show2.style.transform ="translatey(20px)"
    // 
    why = false;
  }else{
    logos.style.transform="translatex(0px)"
    logos.style.opacity="1"
    fours.style.transform="translatex(0px)"
    fours.style.opacity = "1"
    last2.style.transform = "translate(0,0)"
    showlist.style.opacity ="0"
    show2.style.opacity ="0"
    show2.style.transform ="translatex(0px)"
    
    why =true;
  }
}
// 3
var last3 =document.getElementById("last3")
console.log(last3)
last3.onclick = function(){
  if(why){
    logos.style.transform="translatex(-500px)"
    logos.style.opacity="0"
    fours.style.transform="translatex(500px)"
    fours.style.opacity = "0"
    last3.style.transform = "translate(-50px,-410px)"
    showlist.style.opacity ="1"
    show3.style.opacity ="1"
    show3.style.transform ="translatey(20px)"
    // 
    why = false;
  }else{
    logos.style.transform="translatex(0px)"
    logos.style.opacity="1"
    fours.style.transform="translatex(0px)"
    fours.style.opacity = "1"
    last3.style.transform = "translate(0,0)"
    showlist.style.opacity ="0"
    show3.style.opacity ="0"
    show3.style.transform ="translatex(0px)"
    why = true
  }
}
// 4
var last4 =document.getElementById("last4")
console.log(last4)
last4.onclick = function(){
  if(why){
    logos.style.transform="translatex(-500px)"
    logos.style.opacity="0"
    fours.style.transform="translatex(500px)"
    fours.style.opacity = "0"
    last4.style.transform = "translate(-200px,-410px)"
    showlist.style.opacity ="1"
    show4.style.opacity ="1"
    show4.style.transform ="translatey(20px)"
    // 
    why = false;
  }else{
    logos.style.transform="translatex(0px)"
    logos.style.opacity="1"
    fours.style.transform="translatex(0px)"
    fours.style.opacity = "1"
    last4.style.transform = "translate(0,0)"
    showlist.style.opacity ="0"
    show4.style.opacity ="0"
    show4.style.transform ="translatex(0px)"
    // 
    why=true;
  }
}
