let toggle=document.getElementById("toggle");
let toggle_label=document.getElementById("toggle_label");
toggle.addEventListener("change", (Event)=>{
    let checked=Event.target.checked;
   
   document.body.classList.toggle("dark");
    if (checked==true){
    toggle_label.innerHTML='<i class="fa-solid fa-sun"></i>';
    }else{
        toggle_label.innerHTML='<i class="fa-solid fa-moon"></i>';
   
    }
    }
   )
