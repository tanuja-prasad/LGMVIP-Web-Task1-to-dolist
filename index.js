window.onload=function(){
document.getElementById("push").onclick= function(){
    if(document.querySelector('#new input').value.length==0)
    {
        alert("Please,Enter a task.")
    }

    else
    {
       document.querySelector('#task').innerHTML +=`
       <div class="t_task">
           <span id="taskname">
             ${document.querySelector('#new input').value}
            </span>
            <button class="delete">
             Cancel
            </button>
        </div>    
        `;


        var task_new = document.querySelectorAll(".delete");
        for(var i=0;i<task_new.length;i++)
        {
            task_new[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }
    }
}
}
