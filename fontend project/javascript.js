const bar=document.getElementById('har');
const nav=document.getElementById('navbar');
const cross=document.getElementById('cross');

if(bar){
bar.addEventListener('click', () => {
    nav.classList.add('active');
   })
}
if(cross){
    cross.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

 var mainimg=document.getElementById('mainimg');
var smimg=document.getElementsByClassName('smimg');

  smimg[0].onclick=function(){
    mainimg.src=smimg[0].src;
  }
  smimg[1].onclick=function(){
    mainimg.src=smimg[1].src;
  }
  smimg[2].onclick=function(){
    mainimg.src=smimg[2].src;
  }
  smimg[3].onclick=function(){
    mainimg.src=smimg[3].src;
  }

  mainimg.onclick=function(){
    
  }