const itemForm=document.getElementById('item-form')
const itemInput=document.getElementById('form-input-id')

const itemList=document.getElementById('item-list')
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

itemForm.addEventListener('submit',addItems)