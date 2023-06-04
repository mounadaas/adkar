let mainDiv = document.querySelector(".main");
console.log(mainDiv)
let boll = document.querySelector(".boll");
console.log(boll)

boll.addEventListener('click',()=>{
    if(boll.innerHTML > 1){
        boll.innerHTML= boll.innerHTML - 1;
    }else{
        boll.innerHTML= "تم"
        mainDiv.style.backgroundColor = '#EDC6B1';
        boll.style.backgroundColor = '#FFF8DE';
    }
})