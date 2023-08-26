const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-wink" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
</svg>`

const sad = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`



let examGrade = prompt("Puan giriniz")
let textInfo;
let info = document.querySelector("#info")

if(examGrade >= 0 && examGrade <= 100 ){
    textInfo = smile
    info.classList.add("text-blue")
    if(examGrade >= 90) {
        textInfo += "AA"
    } else if (examGrade >= 85){
        textInfo += "BA"
    } else if (examGrade >= 80){
        textInfo += "BB"
    } else if (examGrade >= 75){
        textInfo += "CB"
    } else if (examGrade >= 70){
        textInfo += "CC"
    } else if (examGrade >= 65){
        textInfo += "DC"
    } else if (examGrade >= 60){
        textInfo += "DD"
    } else if (examGrade >= 55){
        textInfo += "FD"
    } else if (examGrade < 50){
        textInfo = `${sad} FF`
        info.classList.add("text-red")
        info.classList.remove("text-blue")
    } 
}else {
    textInfo = "Bilgi doğru değil"
    info.classList.remove('text-blue')
    info.classList.remove('text-red')
    info.classList.add('text-green')
}




info.innerHTML = `${textInfo} >>> ${examGrade}`


