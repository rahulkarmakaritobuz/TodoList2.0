let tasks=[];
const allTask=document.getElementById('AllTask');
const completed=document.getElementById('Completed');
const deleted=document.getElementById('Deleted');
const active=document.getElementById('Active');
const reset=document.getElementById('Reset');

//Mark tasks

let markTask=(ele,status)=>{
    let flag=ele.textContent.trim();
    let found = tasks.find(e => e.text ===flag);
    if(status===false){
        ele.style.textDecoration='none';
        ele.style.color = 'rgb(113, 194, 8)';        
        }
        else{
            ele.style.textDecoration='line-through';
            ele.style.color = 'red';
        }
}

//Creating new task inside task container

let insertTask=(inputText,elementId)=>{
    let para=document.createElement('div');
    para.style.display="flex";
    para.style.justifyContent="center";
    para.style.textAlign="center";
    para.className="innerTaskElement";
    para.setAttribute("id",elementId);    
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.appendChild(para);
    para.innerHTML +=`<html><head><body>       
    <textarea readonly class="innerTask me-3 ms-3" id="innerText">${inputText}</textarea>    
    <button class="fa fa-check rounded-circle pe-4 ps-4 me-3 m-1 shadow" onclick="readTask(this.parentNode.id)" id="mark"></button>
    <button class="fa fa-trash rounded-circle pe-4 ps-4 me-3 m-1 shadow" onclick="deleteTask(this.parentNode.id)" id="finish"></button>
    </body></head></html>`

    let flag=para.firstElementChild.textContent.trim();
    let found = tasks.find(e => e.text ===flag);
    markTask(para.firstElementChild,found.checkMark);
}

let add=()=> {
    let text=document.getElementById('Text');
    if(!!text.value.trim().length){
        tasks.push({
            text:text.value,
            checkDelete:false,
            checkMark:false
        });
        let date=new Date;
        date=date.getTime();
        insertTask(text.value,date);
    }  
    text.value='';
}



//Calling markTask from mark button

let readTask=(id1)=>{
    let readButton=document.getElementById(id1).firstElementChild;    
    let found = tasks.find(e => e.text ===readButton.textContent.trim());
    found.checkMark=!found.checkMark;
    markTask(readButton,found.checkMark);
}

//Deleting task

let deleteTask=(id1)=> {
    let readButton=document.getElementById(id1);
    // console.log(readButton);
    let flag=readButton.textContent.trim();
    let found = tasks.find(e => e.text ===flag);
    found.checkDelete=true;

    let child = readButton.lastElementChild; 
    while (child) {
        readButton.removeChild(child);
        child = readButton.lastElementChild;
    }
}

// Displaying all tasks 

allTask.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');
    // console.log(tasks);
    for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();  
        if(tasks[i].checkDelete!==true) {
            insertTask(tasks[i].text,date+i);
        }                      
    }  
})

//Displaying all active tasks

active.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');
 
        for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();
            if(tasks[i].checkDelete!==true && tasks[i].checkMark!==true){              
                insertTask(tasks[i].text,date+i);
            }
        }   
})

//Displaying all completed or marked tasks

completed.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');

    for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();
            if(tasks[i].checkMark===true && tasks[i].checkDelete!==true){               
                insertTask(tasks[i].text,date+i);
            }
    }  
})

//Displaying all deleted tasks

deleted.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');
 
        for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();
            if(tasks[i].checkDelete===true){              
                insertTask(tasks[i].text,date+i);
            }
        }   
})

//Reset task container

reset.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');
    tasks.length=0;
})

//Activating Enter key

document.querySelector("#Text").addEventListener("keyup", function(e){
 if(e.key === "Enter"){
    add();
 }
});