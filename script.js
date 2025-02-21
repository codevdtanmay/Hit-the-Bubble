
var score = 0;
var timer = 60;
var hitrn = "";

function makeBubble() {
    var clutter = "";
    for (var i = 0; i <= 111; i++) {
        var rn = Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${rn}</div>`;
        
    }
    document.querySelector("#pbtm").innerHTML = clutter;
    
}
function getHit() {
   hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitrn").textContent = hitrn
    
}
function incScore() {
    score += 10;
document.querySelector("#scorebox").textContent = score
}
function runTimer() {
   var timerInt = setInterval(() => {
    if(timer > 0){
        timer--;
    document.querySelector("#timerBox").textContent = timer;}
    
    else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
    }
}, 1000);
    
}

document.querySelector("#pbtm").addEventListener("click",function (details) {
   var hitVal = Number(details.target.textContent);
   if (hitVal == hitrn){
    incScore();
    makeBubble();
    getHit();
   }
  
   
  
})



makeBubble();
getHit();
runTimer()


