let mode = document.querySelector(".outer");
let body = document.querySelector("body");
let currMode="light";
let tran=()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
}
mode.addEventListener("click",tran);