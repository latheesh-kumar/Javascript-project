const generateBtn=document.getElementById('generate')

function fetchData(){
    showSpinner()
    fetch('https://randomuser.me/api')
    .then((res)=>res.json())
    .then((user)=>{
    hideSpinner()
    displayUser(user.results[0])
})
}
function displayUser(user){
    console.log("projectss")
    console.log(user)
    if(user.gender =='male'){
        document.body.style.background='grey'
    }
    else{
        document.body.style.background='skyblue'
    }
    document.getElementById('user').innerHTML=`
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span>${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`

}

function showSpinner(){
    document.querySelector('.spinner').style.display='block'
}
function hideSpinner(){
    document.querySelector('.spinner').style.display='none'

}
fetchData()
generateBtn.addEventListener('click',fetchData)
// create post using fetch

function postData(title,body){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title,
            body
        }),
        headers:{
            'content-type':'application/json',
            token:"latheesh"
        }
    })
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))
}
postData('kumar','this is testing post api- 2')


