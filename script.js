const teclasNum = [...document.querySelectorAll(".num")]        /* pegando todas as teclas que tem a classe 'num' */
const teclasOp = [...document.querySelectorAll(".op")]        /* pegando todas as teclas que tem a classe 'op' */
const teclasRes = document.querySelector(".res")
const teclasDisplay = document.querySelector(".display")
const ton= document.getElementById("ton")       // ultilizando 'getElementById' para pegar o id do 'html'
const tlimpar = document.getElementById("tlimpar")

teclasNum.forEach((el)=> {
    el.addEventListener("click", (evt)=> {      // adçionando o evento de 'click' para cada elemento
        teclasDisplay.innerHTML += evt.target.innerHTML     /* quando teclas forem clicadas será adiçionada no display */
    })
})

teclasOp.forEach((el)=> {
    el.addEventListener("click", (evt)=> {
        teclasDisplay.innerHTML += evt.target.innerHTML
    })
})

tlimpar.addEventListener("click", (evt)=> {
    display.innerHTML = "0"       // limpa a tela quando clicar na tecla de id 'tlimpar'
})