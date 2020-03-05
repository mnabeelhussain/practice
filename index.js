function myTask(){

    var reqExp = /^[a-zA-Z]+$/;
    var toDoList = new Object();
    for(var i = 10; i < toDoList.length;i+10);
    toDoList.taskName = document.getElementById("task").value;
    toDoList.status = document.getElementById("status").value;

    if((toDoList.taskName.match(reqExp))&&(toDoList.status != 0 )){
        document.getElementById("p1").innerHTML = "<b>Id:</b>"+i+"  "+"<b>Task Name:</b> "+toDoList.taskName+"  "+"<b>Status:</b> "+toDoList.status;

    }
    else{
        document.getElementById("p1").innerHTML = "Please Enter a valid character"; 
    }
    
   

    
   

}