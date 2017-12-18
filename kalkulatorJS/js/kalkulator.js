
var box = document.getElementById('inputlg');

function addtoscreen(x) {
    box.value += x;

    if (x=='c'){
        box.value = '';
    }
}

function answer(){
    x = box.value;
    x = eval(x);
    box.value = x;
}