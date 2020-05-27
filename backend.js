let your_score=0;
let cpu_score=0;
const you_score_span=document.getElementById("you-score");
const cpu_score_span=document.getElementById("cpu-score");
const scorecard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result"); 
const paper_div=document.getElementById("p");
const rock_div=document.getElementById("r");
const scissors_div=document.getElementById("s");
// const cpuchoice;  


function getcpuchoice(){
  const c=['r','p','s'];
  const random_number=Math.floor(Math.random()*3);
  return c[random_number];  

}
//console.log(getcpuchoice());
function draw( you,cpu) {
  //console.log("draw");
  you_score_span.innerHTML=your_score;
  cpu_score_span.innerHTML=cpu_score;
  //result_div.innerHTML=you + "Defeats" + cpu +"Wins";
  
}   
function winner( you,cpu) {

  your_score++;
  you_score_span.innerHTML=your_score;
  cpu_score_span.innerHTML=cpu_score;
  result_div.innerHTML=characterToString(you) + " Defeats " + characterToString(cpu) +".  You Win";
  //console.log("win");

}   
function loser( you,cpu) {
  cpu_score++;
  you_score_span.innerHTML=your_score;
  cpu_score_span.innerHTML=cpu_score;
  result_div.innerHTML=characterToString(cpu) + " Defeats " + characterToString(you) +". You Lose";
  //console.log("draw");

}   

function game(yourchoice){
  const cpuchoice=getcpuchoice();
  //console.log("your choice ="+yourchoice);
  //console.log("cpu choice ="+ cpuchoice);//not working
  switch(yourchoice + cpuchoice ){
    case "rs":
    case "pr":
    case "sp":
      winner(yourchoice,cpuchoice);
      //console.log("YOU WIN");
      break;
    case "rp":
    case "ps":  
    case "sr":
      loser(yourchoice,cpuchoice);
      //console.log("YOU LOSE");
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(yourchoice,cpuchoice);
      //console.log("DRAW");
      break;
  }
}


function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  } )
paper_div.addEventListener('click', function() {
  game("p");
  } )
scissors_div.addEventListener('click', function() {
  game("s");
  } )

}
function characterToString(character){
  if(character === 'r')
    return("Stone");
  if(character === 'p')
    return("Paper");
  return("Scissors")
  
  }


  main();