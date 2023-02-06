let ScNumber  = Math.trunc(Math.random()*20) 
console.log(ScNumber)
let x = 20;
let i = 0 ;

document.querySelector(".button-85").addEventListener("click" , function () {

  const Gs = Number(document.getElementById("tentacles").value) 
  if(!Gs){
    document.querySelector(".H2").textContent = "Enter a number 🤔"
  }else if (Gs === ScNumber){
    let p2 = document.getElementById("p2");
    let c = x + i
    p2.innerHTML = `HighScore 🏆 : ${c}`
    document.querySelector(".H2").textContent = "Good Job 👻"
    document.body.style.background = "Green"
    document.getElementById("ima").textContent = ScNumber
  } else if (Gs > ScNumber){
    if (x > 1){
    const p = document.getElementById("p");
    x--
    p.innerHTML = `Score 👌 : ${x}`;
    document.querySelector(".H2").textContent = "High Number 😇"
    } else {
    document.querySelector(".H2").textContent = "Your Lost The Game 🦊"
    }
  }else if (Gs < ScNumber){
    const p = document.getElementById("p");
    x-- 
    p.innerHTML = `Score 👌 : ${x}`  ;
    document.querySelector(".H2").textContent = "Low Number 📍"
  }
}) ;


document.getElementById("Rest").addEventListener("click" , function (){
   document.body.style.background = "#333"
   ScNumber  = Math.trunc(Math.random()*20) +1 ;
   console.log(ScNumber)
   document.getElementById("p").textContent ="Score 👌 : 20"
   document.querySelector(".H2").textContent = "Start Number...!"
   document.getElementById("tentacles").value = '';
   document.getElementById("ima").textContent = '?'
   
});