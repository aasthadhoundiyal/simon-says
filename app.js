//1.if key pressed start the game
//2. random button flash + level 1
//3.track game sequence and user sequence ( by button listener)
//4.user presses button and we check if it algins with game sequence
  //is sequence same, level up
  //else game over

let gameseq=[];
let userseq=[];
let buttons=["yellow","red","pink","blue"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;

        levelUP();
    }

})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelUP(){
    userseq=[];//(reset at each level)
    level++;
    h2.innerText=`level ${level}`;

    //choose random button
    let randindx=Math.floor((Math.random()*3)+1);
    let randcolor=buttons[randindx];
    let randbtn=document.querySelector(`.${randcolor}`) //choosing button
    gameseq.push(randcolor);
    btnflash(randbtn);
    

}
function checkbtn(idx){
    if (userseq[idx] == gameseq[idx]) {

        if (userseq.length == gameseq.length){
            setTimeout(levelUP,1000);
        }

    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
            
        },150)

        started = false;
        level = 0;
        gameseq = [];
        userseq = [];
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnflash(btn);
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkbtn(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}



