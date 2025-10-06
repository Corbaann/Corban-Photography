//document.getElementById("count").innerText = 5;

// let myAge=26
// console.log(myAge)
let saveEL=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
function increment(){
    count+=1
    countEl.textContent=count
 }
function save(){
    let countStr=" " +count+" - "
    saveEL.textContent+=countStr
    let reset=0
    count=reset
    countEl.textContent=count
    console.log(count)
 }

// let lapsCompleted=0
// function incrementLap(){
//     lapsCompleted+=1
//     console.log(lapsCompleted)
    
// }
// incrementLap()
// incrementLap()
// incrementLap()

// let welcomeUser=document.getElementById("welcome")
// let name="phil"
// let greet="yooh"

// welcomeUser.innerText=greet + " "+ name 
// welcomeUser.innerText += "👋"