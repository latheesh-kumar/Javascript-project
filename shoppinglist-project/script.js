const itemForm=document.getElementById('item-form')
const itemInput=document.getElementById('form-input-id')
const itemList=document.getElementById('item-list')
const clearItem=document.getElementById('clear')

function addItems(e){
    e.preventDefault();
    const itemValue=itemInput.value

    if(itemValue === ''){
        alert("Please fill the fields")
    }
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(itemValue))

    const button=createButton('remove-item btn-link text-red')
    li.appendChild(button)
    itemList.appendChild(li)
}   

function createButton(classes){
    const btn=document.createElement('button')
    btn.className=classes
    const icon=createIcon('fa-solid fa-xmark')
    btn.appendChild(icon)
    return btn
}
function createIcon(classes){
    const icon=document.createElement('i')
    icon.className=classes
    return icon
}

function removeItems(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove()
    }
    
}

function clearAllItems(){
// itemList.innerHTML=''
while(itemList.firstChild){
    itemList.firstChild.remove()
}
}

itemForm.addEventListener('submit',addItems)
itemList.addEventListener('click',removeItems)
clearItem.addEventListener('click',clearAllItems)