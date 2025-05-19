AOS.init()
  
  document.getElementById("animes").addEventListener("click",()=>{
    window.location.href="https://diablo-xit.github.io/ANIMA.fr";}) 
   document.getElementById("audio").addEventListener("click",()=>{ window.location.href="https://diablo-xit.github.io/My-weather-/";

})

document.getElementById("ip").addEventListener("click",()=>{ window.location.href="https://diablo-xit.github.io/IP-info/"; } ) ;

setInterval(()=>{
  const date = new Date();
  document.getElementById("date").innerHTML=`${date.toLocaleTimeString()}`;
  
},1000)
