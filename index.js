// let tasks=[];
// // let add=document.getElementById('Add');
// let allTask=document.getElementById('AllTask');
// let completed=document.getElementById('Completed');
// let deleted=document.getElementById('Deleted');
// let reset=document.getElementById('Reset');

// // let createDev=()=>{
// //     let para=document.createElement('div');

// //     return para;
// // }

// let add=()=> {
//     let text=document.getElementById('Text');
//     if(!!text.value.trim().length){
//         tasks.push({
//             text:text.value,
//             checkComplete:false,
//             checkMark:false
//         });
//         // console.log(tasks);
//         let para=document.createElement('div');

//         let date=new Date;
//         date=date.getTime();
//         para.setAttribute("id",date);
//         // para.style.border="2px solid black";
        
//         let taskContainer=document.getElementById('TaskContainer');
//         taskContainer.appendChild(para);

//         para.innerHTML +=`<html><head><body>
//         <div class="row">
//             <div class="col-4 offset-3 text-center">${text.value}</div>
//             <div class="col-2" id="${date}">
//                 <button class="fa fa-check p-2 me-3 m-1" onclick="readTask(this.parentNode.id)" id="mark"></button>
//                 <button class="fa fa-trash p-2 me-3 m-1" onclick="deleteTask(this.parentNode.id)" id="finish"></button>
//             </div>
//         </div>
//         </body></head></html>`
//     }
    
//     text.value='';
// }

// let readTask=(id1)=>{
//     let readButton=document.getElementById(id1);
//     let flag=readButton.textContent.trim();
//     if(readButton.style.color=='red'){
//     readButton.style.textDecoration='none';
//     readButton.style.color = 'rgb(113, 194, 8)';
//     let found = tasks.find(e => e.text ===flag);
//     found.checkMark=false;
//     }
//     else{
//         // let readButton=document.getElementById(id1);
//         // readButton.textContent.trim();
//         readButton.style.textDecoration='line-through';
//         readButton.style.color = 'red';
//         let found = tasks.find(e => e.text ===flag);
//         found.checkMark=true;
//     }
// }

// let deleteTask=(id1)=> {
//     let readButton=document.getElementById(id1);
//     document.getElementById('TaskContainer').removeChild(readButton);
//     let flag=readButton.textContent.trim();
//     let found = tasks.find(e => e.text ===flag);
//     found.checkComplete=true;
//     console.log(tasks);
    
// }

// allTask.addEventListener('click',function(){
//     let taskContainer=document.getElementById('TaskContainer');
//     taskContainer.replaceChildren('');
//     for(let i of tasks){
//         let para=document.createElement('div');
//         para.innerHTML=i.text;
//         taskContainer.appendChild(para);

//         // let text=document.getElementById('Text');
//         // let date=new Date;
//         // date=date.getTime();
//         // para.innerHTML +=`<html><head><body>
//         // <div class="row">
//         //     <div class="col-4 offset-3 text-center">${text.value}</div>
//         //     <div class="col-2" id="${date}">
//         //         <button class="fa fa-check p-2 me-3 m-1" onclick="readTask(this.parentNode.id)"id="mark"></button>
//         //         <button class="fa fa-trash p-2 me-3 m-1" onclick="deleteTask(this.parentNode.id)"id="finish"></button>
//         //     </div>
//         // </div>
//         // </body></head></html>`
        
//     }
// })

// completed.addEventListener('click',function(){
//     let taskContainer=document.getElementById('TaskContainer');
//     taskContainer.replaceChildren('');
//     for(let i of tasks){
//         if(i.checkMark===true){
//             let para=document.createElement('div');
//             para.innerHTML=i.text;
//             taskContainer.appendChild(para);
//         }
//     }
// })

// deleted.addEventListener('click',function(){
//     let taskContainer=document.getElementById('TaskContainer');
//     taskContainer.replaceChildren('');
//     for(let i of tasks){
//         if(i.checkComplete===true){
//             let para=document.createElement('div');
//             para.innerHTML=i.text;
//             taskContainer.appendChild(para);
//         }
//     }
// })

// // $('#TaskContainer').on('click',function(){
// //     // let position=$(this).value;
// //     console.log($(this).value);

// // });

// reset.addEventListener('click',function(){
//     let taskContainer=document.getElementById('TaskContainer');
//     taskContainer.replaceChildren('');
//     tasks.length=0;
// })

// document.querySelector("#Text").addEventListener("keyup", function(e){
//  if(e.key === "Enter"){
//     add();
//  }
// });













let tasks=[];
// let add=document.getElementById('Add');
let allTask=document.getElementById('AllTask');
let completed=document.getElementById('Completed');
let deleted=document.getElementById('Deleted');
let reset=document.getElementById('Reset');

// let createDev=()=>{
//     let para=document.createElement('div');

//     return para;
// }

let insertTask=(inputText,elementId)=>{
    let para=document.createElement('div');
    para.style.display="flex";
    para.style.justifyContent="center";
    para.style.textAlign="center";
    // console.log(elementId);
    para.setAttribute("id",elementId);
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.appendChild(para);
    para.innerHTML +=`<html><head><body>        
    <p class="innerTask me-3 ms-3" id="innerText">${inputText}</p>    
    <button class="fa fa-check p-2 me-3 m-1 shadow" onclick="readTask(this.parentNode.id)" id="mark"></button>
    <button class="fa fa-trash p-2 me-3 m-1 shadow" onclick="deleteTask(this.parentNode.id)" id="finish"></button>
    </body></head></html>`
}

let add=()=> {
    let text=document.getElementById('Text');
    if(!!text.value.trim().length){
        tasks.push({
            text:text.value,
            checkComplete:false,
            checkMark:false
        });
        let date=new Date;
        date=date.getTime();
        insertTask(text.value,date);

        // // console.log(typeof(text.value));
        // // console.log(tasks);
        // let para=document.createElement('div');
        // // para.style.margin="15px 0";
        // para.style.display="flex";
        // para.style.justifyContent="center";
        // para.style.textAlign="center";
        
        // let date=new Date;
        // date=date.getTime();
        // para.setAttribute("id",date);
        
        // let taskContainer=document.getElementById('TaskContainer');
        // taskContainer.appendChild(para);
        // // para.className='childTask';
        // // para.id="childTask";

        // // <div class="d-flex  justify-content-center text-center" id="${date}">
        // // </div>

        // para.innerHTML +=`<html><head><body>        
        //     <p class="innerTask me-3 ms-3" id="innerText">${text.value}</p>    
        //     <button class="fa fa-check p-2 me-3 m-1 shadow" onclick="readTask(this.parentNode.id)" id="mark"></button>
        //     <button class="fa fa-trash p-2 me-3 m-1 shadow" onclick="deleteTask(this.parentNode.id)" id="finish"></button>
        // </body></head></html>`
        // console.log(para);

    }
    
    text.value='';
}

//Marked task

let readTask=(id1)=>{
    let readButton=document.getElementById(id1).firstElementChild;
    // console.log(readButton.firstElementChild);
    let flag=readButton.textContent.trim();

    if(readButton.style.color=='red'){
    readButton.style.textDecoration='none';
    readButton.style.color = 'rgb(113, 194, 8)';
    let found = tasks.find(e => e.text ===flag);
    found.checkMark=false;
    }
    else{
        // let readButton=document.getElementById(id1);
        // readButton.textContent.trim();
        readButton.style.textDecoration='line-through';
        readButton.style.color = 'red';
        let found = tasks.find(e => e.text ===flag);
        found.checkMark=true;
    }
}

//Deleting task

let deleteTask=(id1)=> {
    let readButton=document.getElementById(id1);
    // console.log(readButton);
    let flag=readButton.textContent.trim();
    let found = tasks.find(e => e.text ===flag);
    found.checkComplete=true;
    // console.log(tasks);
    
    // console.log(readButton);
    // let readButton=document.getElementById(childTask);

    let child = readButton.lastElementChild; 
        while (child) {
            readButton.removeChild(child);
            child = readButton.lastElementChild;
        }

    // document.getElementById('TaskContainer').remove(readButton.children);
    
    
}

// Displaying all tasks 

allTask.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');

    for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();                 
        insertTask(tasks[i].text,date+i);
        }  

    // for(let i of tasks){
    //     insertTask(i.text);
    //     // let para=document.createElement('div');
    //     // para.innerHTML=i.text;
    //     // taskContainer.appendChild(para);

    //     // let text=document.getElementById('Text');
    //     // let date=new Date;
    //     // date=date.getTime();
    //     // para.innerHTML +=`<html><head><body>
    //     // <div class="row">
    //     //     <div class="col-4 offset-3 text-center">${text.value}</div>
    //     //     <div class="col-2" id="${date}">
    //     //         <button class="fa fa-check p-2 me-3 m-1" onclick="readTask(this.parentNode.id)"id="mark"></button>
    //     //         <button class="fa fa-trash p-2 me-3 m-1" onclick="deleteTask(this.parentNode.id)"id="finish"></button>
    //     //     </div>
    //     // </div>
    //     // </body></head></html>`
        
    // }
})

//Displaying all completed or marked tasks

completed.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');

    for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();
            if(tasks[i].checkMark===true){ 
                console.log(tasks[i].text);
                console.log(date+i);               
                insertTask(tasks[i].text,date+i);
            }
    }  

    // for(let i of tasks){
    //     if(i.checkMark===true){
    //         insertTask(i.text);
    //         // let para=document.createElement('div');
    //         // para.innerHTML=i.text;
    //         // taskContainer.appendChild(para);
    //     }
    // }
})

//Displaying all deleted tasks

deleted.addEventListener('click',function(){
    let taskContainer=document.getElementById('TaskContainer');
    taskContainer.replaceChildren('');
 
        for(i=0;i<tasks.length;i++){
        let date=new Date;
        date=date.getTime();
            if(tasks[i].checkComplete===true){ 
                console.log(tasks[i].text);
                console.log(date+i);               
                insertTask(tasks[i].text,date+i);
            }
        }   
})



// $('#TaskContainer').on('click',function(){
//     // let position=$(this).value;
//     console.log($(this).value);

// });



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
