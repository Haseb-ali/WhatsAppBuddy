Swal.fire('Any fool can use a computer');
let loginForm=document.querySelector("#loginForm");    
let fieldsArray=[loginForm[1],loginForm[2]];
const validateFrom=()=>{
    let validateCount=0;    
    fieldsArray.map((field)=>{
        console.log(field.value);
        if(field.value.length==0){
            field.classList.add("make-border-denger");
            validateCount++;
        }
    })
    if(validateCount>0){
        return false;
    }
               
}
fieldsArray.map((field)=>{
    field.addEventListener("focus",(e)=>{
        e.target.classList.remove("make-border-denger");
    })
})
fieldsArray.map((field)=>{
    field.addEventListener("blur",(e)=>{
        if(e.target.value.trim().length==0){
            e.target.classList.add("make-border-denger");
        }
    })
})
