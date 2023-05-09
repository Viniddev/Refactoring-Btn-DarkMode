const interruptor = document.querySelector("#area")

interruptor.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode")
    interruptor.classList.toggle("dark-mode")
})