const inputBox=document.getElementById('input-box');
const ListCont=document.getElementById('list');
function AddTask() {
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        ListCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata()
}
        ListCont.addEventListener("click",function(e){
        if(e.target.tagName=== "LI"){
            e.target.classList.toggle("checked");
            savedata()
        }
        else if(e.target.tagname === "SPAN"){
            e.target.parentElement.remove();
            savedata()
                }        
    },false);

    function savedata(){
        localStorage.setItem("data",ListCont.innerHTML);

    }
    function showtask()
    {
        ListCont.innerHTML=localStorage.getItem("data");

    }
    showtask();
