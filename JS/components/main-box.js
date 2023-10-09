var box = document.getElementById('box')
var button = document.getElementById('button')

button.addEventListener('click', aparecer)
function aparecer()
{
    if(box.style.opacity == '0'){
        box.style.opacity = '1'
    }
    
    else{
        box.style.opacity = '0'
    }
}


