var ul = document.getElementById('ul');
var btn = document.getElementById('btn');
var btnClean = document.getElementById('clean');
var input = document.getElementById('txt');
var lis = ul.querySelectorAll('li');

function addEvent(li){
    li.addEventListener('click',done);
}
btn.addEventListener('click', function(){
    var li = document.createElement('li');
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);
});
btnClean.addEventListener('click', function(){
        txt.value = "";
        btnClean.focus();
});
 
