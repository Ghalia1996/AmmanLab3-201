"use strict";
let name = prompt("Welcome, What's your name?");
alert("In this Game please answering only Y if Yes ot N if No.")
let play = prompt("Are you need to play with me hot or cold game?");
let hot = 1 , cold = 0;

if (play.toUpperCase() == 'Y'){
    alert("I've 6 question, You need to Answering True at least 4 Question to be pass.")
    let instroctoreName = prompt("The Instroctore Name is Bashar?");
    if (instroctoreName.toUpperCase() == 'Y'){
        hot+=1;
    }
    else if(instroctoreName.toLowerCase() == 'n'){
        cold+=1;
    }
    let howManyTA = prompt("Are you have 20 TA's to help us in the course?");
    if (howManyTA.toUpperCase() == 'N'){
        hot+=1;
    }
    else if(howManyTA.toLowerCase() == 'y'){
        cold+=1;
    }
    let howManyStudent = prompt("we are 35 student ?");
    if (howManyStudent.toUpperCase() == 'N'){
        hot+=1;
    }
    else if(howManyStudent.toLowerCase() == 'y'){
        cold+=1;
    }
    let LTUCDept = prompt("are LTUC have a build in Irbid ?");
    if (LTUCDept.toUpperCase == 'Y'){
        hot+=1;
    }
    else if(LTUCDept.toLowerCase()=='n'){
        cold+=1;
    }
    let TA_Name = prompt("TA name is Ali ?");
    if (TA_Name.toLowerCase() == 'n')
    {
        hot+=1;
    }
    else if (TA_Name.toLowerCase() == 'y'){
        cold+=1;
    }
    let rateofcourse = prompt("Are you have a full information in this course");
    if(rateofcourse.toUpperCase() == 'Y'){
        hot+=1;
    }
    else if(rateofcourse.toLowerCase()=='n'){
        cold+=1;
    }
    if(hot >= 4){
        alert("You are passing in the exam and git " + hot + " of 6");
    }
    else{
        alert("you are falid in the exam :)");
    }
}
else{
    alert("You will not play with me :(")
}





let entered = prompt("How many TA we have in the lesson?");
for(var i = 0 ; i < 4 ; i++){

    if (entered == '7' && i != 3){
        let ii = i + 1; 
        alert("Yes, They are :"+
        "\nSa'ed Al khateeb"        
        +"\nDiana Al Shafeey"
        +"\nHadeel AlHawajreh"
        +"\nAhlam Alafeshat"
        +"\nRahma Kuran"
        +"\nAshjan Albarqi"
        +"\nYou have : " + ii + " Steps" );
        break;
    }
    else if(entered > 7 && i != 3){
        entered = prompt("you input up number, Please try again.");
        continue;
    }
    else if (entered < 7 && i != 3){
        entered = prompt("you input to low number, Please try again.");
        continue;
    }
    else {
        alert("No attempts is corercr,\nThe Correct value equal 7.");
        break;
    }
}