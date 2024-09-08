//score
let grade=0;

let userID;

//users awser
myAns=[];

//quizz data
let data={
     "question":[
         {
             "question":"what is my name?",                                                                     "options":                      ["fred","james","Johanna"],
             "ans":"Johanna"
         },
         {
             "question":"whats do i like?",
             "options":["dance","food","music"],
             "ans":"music"
         },
         {
             "question":"what do i do?",
             "options":
          ["web-developer","gamer","footballer","working out"],
             "ans":"web-developer"
         }
     ]
}



//Verabal global 
let j=0;
   

//grabing elemnemnts Form dom
//question
let question=document.querySelector(".question ")
 
//progress bar
let progress=document.querySelector(".progress-bar");
 
//next btn
let nextBtn=document.querySelector('.nxt');
//previous
let previousBtn=document.querySelector(".prv");

let divBtn=document.querySelector(".pagination")



let ul=document.querySelector("ul");
//going through questions 
function getQuestion(val){
 let op="";
 //checking selected options
  sellectOp();
  
  question.innerHTML=data.question[val].question;
for(let k=0; k<data.question[val].options.length; k++){ 

 op+=`
<li>
<label class="check-container">
${data.question[val].options[k]}
<input type="radio" name="radio" value='${data.question[val].options[k]}'>
<span class="checkmark"></span>
</label>
</li>
`
}
 ul.innerHTML=op;
}





// add all sellected elements to the array 

function sellectOp(){
  let option= document.querySelectorAll(".check-container input");
  
  for(let i=0;i<option.length;i++){
    if(option[i].checked){
      myAns.push(option[i].value);
    }
  }
  
}






//click for next question 
nextBtn.addEventListener("click",nextQust);

//next question
function nextQust(e){

getQuestion(j);

// check j is bigger than questions
if(j<data.question.length-1) {
if(j>0){
   previousBtn.style.visibility="visible";
 }
   e.target.removeAttribute("class");
   e.target.setAttribute("class","nxt");
   j++;
   
} else{
   //show score
  
  previousBtn.style.visibility="visible";
  e.target.innerHTML="submit";
  e.target.setAttribute("class","submit");
  e.target.style.background="#8098ff";
  e.target.style.border="1px solid #8098ff";
  
  
if(e.target.innerHTML=="submit"){
     
  
let submit=document.querySelector(".submit");
 
submit.addEventListener("click",getScore);
}

}    

  

}



//get answered questions 

function getScore(){

   for(let i=0;i<data.question.length;i++){
   
     if(myAns[i]==data.question[i].ans){
     
        grade+=1;
        
        
     } else {
     
        grade+=0;
        
     }
   }
   
   alert(userID+" your score is "+grade+" out of "+data.question.length);
   
   nextBtn.removeAttribute("class");
    nextBtn.setAttribute("class","nxt");
}



//click pervious questions 
previousBtn.addEventListener("click",prevQust);

//previous question 
function prevQust(e){
     
 
if(j!=0){
     j--;
     getQuestion(j);
     nextBtn.style.visibility="visible";
     nextBtn.innerHTML="next";
     e.target.style.visibility="visible";
     
     
     
     nextBtn.style.background="#ff742b";
     nextBtn.style.border="1px solid #ff742b";
     
}
 else{
 //button dont disapear in last question.
 
      e.target.style.visibility="hidden";
      j=0;
      
   }
   
}


//progress bar loading 
function move(w) {
    let id = setInterval(frame, 60);    
    function frame() {    
      if (w >= 100) {
        getScore();
        clearInterval(id);   
             
      } else {
        w+=0.3;
        progress.style.width = w + "%";
        
      }   
    }
}


    
    
//remove modal
 let registerUser=document.querySelector(".pop-up button");
 let userName=document.querySelector(".pop-up input");
 let modal=document.querySelector(".dark-layer");
 

  
 registerUser.addEventListener("click",()=>{
     if(userName.value==""){
        alert("enter a name pls!");
     }else{
     
     userID=userName.value;
     modal.style.display="none";
     }
    move(2)
  });

  