const btn = document.getElementById('btn');
const nav = document.querySelector('ul');
let isBtnClicked = false;
function btnClicked(){ 
    if(isBtnClicked == false){
        nav.style.top = '2.5rem';
        btn.className = 'material-icons';
        btn.innerHTML = 'close';
        isBtnClicked = true;
    }
    else {
        nav.style.top = '-20rem';
        btn.className = 'material-icons';
        btn.innerHTML = 'menu';
        isBtnClicked = false;
    }

}
btn.addEventListener('click', btnClicked);