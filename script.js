document.querySelector ('button').addEventListener ("click", sender) // присваиваем кнопке событие
function sender (){
    let message = document.querySelector ('#message').value;
    message =message.replace(/viagra|xxx/gi, '***');
    let commentContainer = document.querySelector ('.container');
    let sp = document.createElement ('span')
    let comment = commentContainer.appendChild (sp);
    comment.classList.add ('comment');
    comment.innerHTML = message  + "<hr>" ;
    document.querySelector ('#message').value
    = ' ';
    
}