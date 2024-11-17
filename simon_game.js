console.log("connected");
let started=false;
let Level=0;
let btns=["red", "yellow","blue" ,"pink"];
let gameseq=[];
let userseq=[];
document.addEventListener("keypress",function(){
    if(started==false){
     console.log("game is started");
     started=true;
     levelUp(); 
    }
    
});
function gameFlash(Btn){
   Btn.classList.add("flash");
   setTimeout(function(){
    Btn.classList.remove("flash");
   },300) ;
}
function UserFlash(Btne){
    Btne.classList.add("userflash");
    setTimeout(function(){
     Btne.classList.remove("userflash");
    },200) ;
 }
function levelUp(){
    userseq=[];
    Level++;
    h=document.querySelector("h3");
    h.innerText=`Level ${Level}`;
    let randum_ind=Math.floor(Math.random()*4);
    let random_color=btns[randum_ind]; 
    let random_btn=document.querySelector(`.${random_color}`);
    gameseq.push(random_color);
    console.log(gameseq);
    gameFlash(random_btn);
}
function btnPress(){
    let btn=this;
    UserFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btne of allbtn){
    btne.addEventListener("click",btnPress);
} 
function checkAns(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp ,1000);
        } 
    } 
    else{
        h.innerHTML=`Game Over! Your score is <b>${Level} !</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },2000);
        Reset();
    }
    function Reset(){
        started=false;
        gameseq=[];
        userseq=[];
        Level=0;
    }
}
