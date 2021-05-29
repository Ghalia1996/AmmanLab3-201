"use strict";
function mainQues() {
    let name = prompt("Welcome, What's your name?");
    alert("In this Game please answering only Y if Yes ot N if No.")

<<<<<<< HEAD
if (play.toUpperCase() == 'Y'){
    alert("I've 6 question, You need to Answering True at least 4 Question to be pass.")
    let myName = prompt("The User Name is Ghalia ?");
    if (myName.toUpperCase() == 'Y'){
        hot+=1;
    }
    else if(myName.toLowerCase() == 'n'){
        cold+=1;
    }
    let bd = prompt("my birthdate is 22/02/1998 ?");
    if (bd.toUpperCase() == 'N'){
        hot+=1;
    }
    else if(bd.toLowerCase() == 'y'){
        cold+=1;
    }
    let howManybrother = prompt("I've 3 brother's ?");
    if (howManybrother.toUpperCase() == 'N'){
        hot+=1;
    }
    else if(howManybrother.toLowerCase() == 'y'){
        cold+=1;
    }
    let YUDept = prompt("Am I studying in Yarmouk university ?");
    if (YUDept.toUpperCase == 'Y'){
        hot+=1;
    }
    else if(YUDept.toLowerCase()=='n'){
        cold+=1;
    }
    let Hob = prompt("Do I like Reading and Swimming both ?");
    if (Hob.toLowerCase() == 'n')
    {
        hot+=1;
    }
    else if (Hob.toLowerCase() == 'y'){
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
=======

    let play = prompt("Are you need to play with me hot or cold game?");
    let hot = 1, cold = 0;

    if (play.toUpperCase() == 'Y') {
        alert("I've 6 question, You need to Answering True at least 4 Question to be pass.")
        let instroctoreName = prompt("do i like programming?");
        if (instroctoreName.toUpperCase() == 'Y') {
            hot += 1;
        }
        else if (instroctoreName.toLowerCase() == 'n') {
            cold += 1;
        }

        let howManyTA = prompt("do i like swimming");
        if (howManyTA.toUpperCase() == 'N') {
            hot += 1;
        }
        else if (howManyTA.toLowerCase() == 'y') {
            cold += 1;
        } let howManyStudent = prompt("Do you think I am good at drawing?");
        if (howManyStudent.toUpperCase() == 'N') {
            hot += 1;
        }
        else if (howManyStudent.toLowerCase() == 'y') {
            cold += 1;
        }
        let LTUCDept = prompt("Am I good at singing");
        if (LTUCDept.toUpperCase == 'Y') {
            hot += 1;
        }
        else if (LTUCDept.toLowerCase() == 'n') {
            cold += 1;
        }
        let TA_Name = prompt("Do I speak English well");
        if (TA_Name.toLowerCase() == 'n') {
            hot += 1;
        }
        else if (TA_Name.toLowerCase() == 'y') {
            cold += 1;
        }
   

        if (hot >= 4) {
            alert("You are passing in the exam and git " + hot + " of 6");
        }

        else {
            alert("you are falid in the exam :)");
        }
>>>>>>> 830760fef375e28cbd5ccd08bb6e87a836a44751
    }

    else {
        alert("You will not play with me :(")

    }
    return hot, cold;
}




mainQues();

let entered = prompt("How many TA we have in the lesson?");
<<<<<<< HEAD
for(var i = 0 ; i < 6 ; i++){

    if (entered == '7' && i != 5){
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
    else if(entered > 7 && i != 5){
        entered = prompt("you input up number, Please try again.");
        continue;
    }
    else if (entered < 7 && i != 5){
=======
for (var i = 0; i < 4; i++) {

    if (entered == '7' && i != 3) {
        let ii = i + 1;
        alert("Yes, They are :" +
            "\nSa'ed Al khateeb"
            + "\nDiana Al Shafeey"
            + "\nHadeel AlHawajreh"
            + "\nAhlam Alafeshat"
            + "\nRahma Kuran"
            + "\nAshjan Albarqi"
            + "\nYou have : " + ii + " Steps");
        break;
    }
    else if (entered > 7 && i != 3) {
        entered = prompt("you input up number, Please try again.");
        continue;
    }
    else if (entered < 7 && i != 3) {
>>>>>>> 830760fef375e28cbd5ccd08bb6e87a836a44751
        entered = prompt("you input to low number, Please try again.");
        continue;
    }
    else {
        alert("No attempts is corercr,\nThe Correct value equal 7.");
        break;
    }
}
