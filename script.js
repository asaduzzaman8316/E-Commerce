const Chival=document.getElementById("chineseValue");
const chiMinas= document.getElementById("minas");
const chiPlas=document.getElementById("plas");

let count =0;

chiMinas.addEventListener("click", () => {
    count--;
    Chival.textContent=count;
});

chiPlas.addEventListener("click", () =>{
    count++;
    Chival.textContent=count;
})