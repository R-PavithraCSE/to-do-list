const input =document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
const addbtn=document.getElementById('add-btn');
function addlist(){
if(input.value===''){
    alert("enter your message");
}
else{
    let newlist=document.createElement('li');
    newlist.innerHTML=input.value;
    listContainer.appendChild(newlist);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    newlist.appendChild(span);
}
input.value='';
saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()
