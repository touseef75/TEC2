let data = [
    {
        question:"Q1) The cavity in the body of Hydra is called?",
        a:"a) Coelom",
        b:"b) Cocelenteron",
        c:"c) Haemocoel",
        d:"d) hydrocoel",
        ans:"ans2",
    },
    {
       question:"Q2) Which animal has never cell but not brain?",
        a:"a) Amoebe",
        b:"b) Hydra",
        c:"c) Sponge",
        d:"d) Cockroach", 
        ans:"ans2",
    },
     {
       question:"Q3) Nematocysts are found in?",
        a:"a) Porifera",
        b:"b) Coelenterata",
        c:"c) Platehelminthes",
        d:"d) Annelida", 
        ans:"ans2",
    },
    {
       question:"Q4) Nematocysts are from?",
        a:"a) Interstitial cell",
        b:"b) Epithelio muscular cells",
        c:"c) Ectodermal cell",
        d:"d) Endodermal cell", 
        ans:"ans1",
    },
    {
       question:"Q5) The mesogloea is?",
        a:"a) Partly cellular and partly fibrous",
        b:"b) Only fibrous",
        c:"c) Neither cellular nor fibrous ",
        d:"d) Cellular", 
        ans:"ans3",
    },
    {
       question:"Q6) In hydra digestion of food is?",
        a:"a) Intra Cellular",
        b:"b) Extra Cellular",
        c:"c) Partly Intra Cellular and Partly Extra Cellular",
        d:"d) None", 
        ans:"ans3",
    },
    {
       question:"Q7) Largest nematocyst of hydra is ?",
        a:"a) Volvent",
        b:"b) Atrichous isorhiza",
        c:"c) Holotrichous isorhiza",
        d:"d) Penetrant", 
        ans:"ans4",
    },
    {
       question:"Q8) Locomotion is not concerned with mating in?",
        a:"a) Sponge",
        b:"b) Earthworm",
        c:"c) Hydra",
        d:"d) Cockroach", 
        ans:"ans3",
    }, {
       question:"Q9) Tentacles of hydra help in?",
        a:"a) Locomotion",
        b:"b) Food capture",
        c:"c) Digestion",
        d:"d) Both 1 and 2", 
        ans:"ans4",
    }, {
       question:"Q10) No special structure are found in hydra for?",
        a:"a) Respiration",
        b:"b) Food capture",
        c:"c) Offence and defence",
        d:"d) Attachment", 
        ans:"ans1",
    },
]
let question = document.getElementById("question");
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let but = document.getElementById("but");
let total = document.getElementById("scoreArea")
let incre = 0;
let add = 0;
let answers = document.querySelectorAll(".answere")
function detail(){
    let arr = data[incre];
    question.innerHTML = arr.question;
    a.innerHTML = arr.a;
    b.innerHTML = arr.b;
    c.innerHTML = arr.c;
    d.innerHTML = arr.d;
}
detail();
 function getid(){
     let answer;
     answers.forEach((everyEle)=>{
        if(everyEle.checked){
            answer = everyEle.id;
        }
     })
     return answer;
 } 



let audio2 = document.getElementById("audio1");
    


but.addEventListener("click",()=>{
        img.src=" ";
        audio2.play();

      incre++;
    if(incre < data.length){
        detail();
    }else{
        
    }

})

let img = document.getElementById("img");
    let but2 = document.getElementById("but2");
let audio1 = document.getElementById("audio");

but2.onclick = function(){
    var main = getid();
    console.log(main)
    if(main == data[incre].ans){
        add++;
        audio1.play();
        img.src= "./image2/check.gif";
    }else{
        img.src = "./image2/wrong.png"
    }
}




let info = document.getElementById("info");
let main1 = document.getElementById("main1");
let nfq = document.getElementById("nfq");
let nfa = document.getElementById("nfa");



let cal = document.getElementById("cal");
cal.addEventListener("click",function(){
        audio2.play();

    nfq.innerHTML =  "= " + data.length;
    nfa.innerHTML =  "= " +  add;
    info.style.display = "";
    main1.style.display = "none";
    but.disabled = true;
    

})

let ok = document.getElementById("ok");

ok.onclick = function(){
        audio2.play();
    but.disabled = false;

    info.style.display = "none";
    main1.style.display = "";
}



   
   
   
   
   
   
   
   
   
   
   
   
   
   




