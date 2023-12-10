function keycodes(e){
    const insert =document.getElementById('insert')
    insert.innerHTML=''

    const keys={
        'e.key':e.key,
        'e.keyCode':e.keyCode,
        'e.code':e.code
    }
    
    for(let key in keys){
        const div= document.createElement('div')
        div.className='keys'
        const small=document.createElement('small')
        const keyText=document.createTextNode(key)
        const valueTxt=document.createTextNode(keys[key])
        div.appendChild(small)
        small.append(keyText)
        div.appendChild(valueTxt)
        insert.appendChild(div)
    }

}
window.addEventListener('keydown',keycodes)


// {/* <div id="insert">
// <div class="keys">
//   <p>s</p>
//   <small>key</small>
// </div>
// <div class="keys">
//   <p>16</p>
//   <small>keycode</small>
// </div>
// <div class="keys">
//   <small>code</small>
// </div> */}
// </div>

