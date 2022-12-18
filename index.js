let a = document.getElementsByClassName("arrow")
let b = document.getElementsByClassName("question")
let c = document.getElementsByClassName("answer")
let l = a.length;
for (let i = 0; i < l; i++) {
    // a[i].classList.remove("rotate");
    // c[i].classList.remove("visible");
    b[i].addEventListener("click",function (){
        rem(i);
        a[i].classList.toggle("rotate");
        c[i].classList.toggle("visible");
        if(document.getElementsByClassName("answer")[i].classList.contains("visible")){
            b[i].style.fontWeight = "700";
        }  
        else{
            b[i].style.fontWeight = "400";
        } 
    }) 
}

function rem(e){
    for (let j = 0; j < l; j++) {
        if(e != j){
            a[j].classList.remove("rotate");
            c[j].classList.remove("visible");
        }
    }
}

if(document.querySelectorAll(".question:hover")[2]){
    alert("hovered");
}