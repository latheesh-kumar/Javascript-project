const itemForm=document.getElementById('item-form')
const itemInput=document.getElementById('form-input-id')
const itemList=document.getElementById('item-list')
const clearItem=document.getElementById('clear')
const filterItems=document.getElementById('filter')
const formBtn=itemForm.querySelector('button')
let isEditMode=false

function displayItems(item){
    const itemsFromStorage=getItemFromStorage()
    itemsFromStorage.forEach(item =>addItemToDOM(item))
    checkUi()
}
function onAddItemSubmit(e){
    e.preventDefault();
    const itemValue=itemInput.value

    if(itemValue === ''){
        alert("Please fill the fields")
    }
    if(isEditMode){
        const itemToEdit=itemList.querySelector('.edit-mode')
        removeItemFromStorage(itemToEdit.textContent)
        itemToEdit.classList.remove('edit-mode')
        itemToEdit.remove()
        isEditMode=false;
    }
    addItemToDOM(itemValue)
    addToStorage(itemValue)
    
    checkUi()
    itemInput.value = '';
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
function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        removeItems(e.target.parentElement.parentElement)
    }
    else{
        setEditItem(e.target)
    }
}

function setEditItem(item){
    isEditMode=true
    itemList
    .querySelectorAll('li')
    .forEach((i)=> i.classList.remove('edit-mode'))
    item.classList.add('edit-mode')
    formBtn.innerHTML='<i class="fa-solid fa-pen"></i> update Item'
    formBtn.style.background="green"
    itemInput.value=item.textContent

}

function removeItems(item){
        if(confirm('Are you sure')){
        item.remove()
        removeItemFromStorage(item.textContent)
        checkUi()
       
    }
}

function removeItemFromStorage(item){
    let itemsFromStorage=getItemFromStorage()
    itemsFromStorage=itemsFromStorage.filter((i)=>i != item)
    localStorage.setItem('items',JSON.stringify(itemsFromStorage))

}

function clearAllItems(){
// itemList.innerHTML=''
while(itemList.firstChild){  
    itemList.removeChild(itemList.firstChild);
}
    localStorage.remove('items')
checkUi()
}

function filterValues(e){
const items=itemList.querySelectorAll('li')
const text=e.target.value.toLowerCase();
items.forEach((item)=>{
    const itemName=item.firstChild.textContent.toLowerCase();
    console.log(itemName)
    if(itemName.indexOf(text) !=-1){
       item.style.display='flex' 
    }
    else{
        item.style.display='none' 
    }
})
}


function checkUi(){
    itemInput.value=''
    const items=itemList.querySelectorAll('li')
    if(items.length ===0){
        console.log("empty items")
        clearItem.style.display='none'
        filterItems.style.display='none'
    }
    else{
        clearItem.style.display='block'
        filterItems.style.display='block'
    }
    formBtn.innerHTML='<i class="fa-solid fa-plus"></i> Add Item'
    formBtn.style.background="#333"
    isEditMode=false
}
function addItemToDOM(item){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button=createButton('remove-item btn-link text-red')
    li.appendChild(button)
    itemList.appendChild(li)

}

function addToStorage(item){
    const itemsFromStorage=getItemFromStorage();
    itemsFromStorage.push(item)
    localStorage.setItem('items',JSON.stringify(itemsFromStorage))
}

function getItemFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items')===null){
        itemsFromStorage=[]
    }
    else{
        itemsFromStorage=JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function init(){
itemForm.addEventListener('submit',onAddItemSubmit)
itemList.addEventListener('click',onClickItem)
clearItem.addEventListener('click',clearAllItems)
filterItems.addEventListener('input',filterValues)
document.addEventListener('DOMContentLoaded',displayItems)
checkUi()
}
init()