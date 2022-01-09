// var a = [];

// function CreateStudentObj(name,age,){
//     this.name = name;
//     this.age = age;
//     // this.inst = inst;
// }

// CreateStudentObj.prototype.institute = "saims"


// function createStudent(name,age){

//     var stdName = document.getElementById("name").value;
//     var stdage = document.getElementById("age").value;
//     // var stdinst = document.getElementById("inst").value;

//     var abc = new CreateStudentObj(stdName,stdage);
//     a.push(abc)
//   console.log(abc)
// // console.log(abc.institute)
// var b = "institute" in abc;
// console.log(b)
// }




var hours = 0;
var mins = 0; 
var secs = 0;

var interval;

var showHours = document.getElementById("showHours")
var showMins = document.getElementById("showMins")
var showSecs = document.getElementById("showSecs")

function startTimer(){
    interval = setInterval(function (){
        secs++
        showSecs.innerHTML = secs;
       if( secs == 5){
           mins ++
           secs = 0;
           showMins.innerHTML = mins;
           showSecs.innerHTML = secs;
           if(mins == 5){
               hours++;
               showHours.innerHTML = hours;
               mins = 0;
               showMins.innerHTML = mins;
           }
            }
},1000)
}


function stopTimer(){
    clearInterval(interval)
}


function resetTimer(){
    mins = 0;
    hours = 0;
    secs = 0;

    showHours.innerHTML = hours;
    showMins.innerHTML = mins;
    showSecs.innerHTML = secs;
}




// var selectHours = document.getElementById("selectHours")
// var selectMins = document.getElementById("selectMins")
// var selectSecs = document.getElementById("selectSecs")


// var startingHours = 2;
// var startingMinutes = startingHours * 5;
// var startingSeconds = startingMinutes * 5;

 
   

// var interval2;

// function selectTime(){


// showHours.innerHTML = selectHours.value;
// showMins.innerHTML = selectHours.value;
// showSecs.innerHTML = selectSecs.value;

//     interval2 = setInterval(function (){

//         var hours  = Math.floor(startingMinutes / 5)
//         var minutes =  Math.floor(startingMinutes / 5);
//          var seconds = startingMinutes % 5;
    
//          showMins.innerHTML = minutes;
//          showSecs.innerHTML = seconds;
//          showHours.innerHTML = hours;
         
//          startingMinutes--;

//          if(minutes == 0 && hours == 0 && seconds == 0){
//              alert("Time finish")
//          }
    
    
//     },1000)

// }


// function stopTime(){
//     clearInterval(interval2)
// }


// function resetTimer(){
//     minutes = 0;
//     hours = 0;
//     seconds = 0;

//         showMins.innerHTML = minutes;
//          showSecs.innerHTML = seconds;
//          showHours.innerHTML = hours;

// }

