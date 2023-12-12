const jokeText=document.querySelector('p')
const jokeBtn=document.getElementById('btn')

const  generateJoke=()=>{
   
    const xhr= new XMLHttpRequest()
    xhr.open('GET','https://api.chucknorris.io/jokes/random')
    xhr.onreadystatechange = function (){
        console.log("hi")
        if(this.readyState === 4){
            if(this.status==200){
                jokeText.innerHTML=JSON.parse(this.response).value
            }
            else{
                jokeText.innerHTML="Some thing went wrong !"
            }
        }
    }
    xhr.send()
}


jokeBtn.addEventListener('click',generateJoke)
document.addEventListener('DOMContentLoaded',generateJoke)