let hide = document.getElementById('btn');
hide.onmouseover=function(){
    document.querySelector(".pop-up").style.display = "flex";
}
let popup = document.getElementById('pop-up');
popup.onmouseover = function(){
    document.querySelector(".pop-up").style.display = "flex";
}
popup.onmouseout = function(){
    document.querySelector(".pop-up").style.display = "none";
}



let move = document.getElementById('move');
move.onmouseover = function(){
   document.querySelector('#down-icon').style.transform = "rotate(180deg)";
}
move.onmouseout = function(){
    document.querySelector('#down-icon').style.transform = "rotate(0deg)";
}


let moreMove = document.getElementById('more-text');
moreMove.onmouseover=function(){
    document.querySelector(".more-pop-up").style.display = "flex";
}
let morepopup = document.getElementById('more-pop-up');
morepopup.onmouseover = function(){
    document.querySelector(".more-pop-up").style.display = "flex";
}
morepopup.onmouseout = function(){
    document.querySelector(".more-pop-up").style.display = "none";
}



let show = document.getElementById('bar');
show.onclick = function(){
    document.querySelector('.left-nav').style.display = 'flex';
}

let wrapNav = document.getElementById('wrapup');
wrapNav.onclick = function(){
    document.querySelector('.left-nav').style.display = 'none';
}