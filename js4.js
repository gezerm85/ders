let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDom = document.querySelector('#counter')
let increaseDom = document.querySelector('#increase')
let decreaseDom = document.querySelector('#decrease')
let resetDom = document.querySelector('#reset')

counterDom.innerHTML = counter

increaseDom.addEventListener("click", clickEvent)
decreaseDom.addEventListener("click", clickEvent)
resetDom.addEventListener("click", clickEvent)

function clickEvent (){
    
    console.log(this.id)
    if(this.id == "increase"){
        counterDom.innerHTML = counter += 1
    }else{
        counterDom.innerHTML = counter -= 1
    }if(this.id == "reset"){
        counterDom.innerHTML = counter = 0
    }

    localStorage.setItem('counter', counter)
   
}

