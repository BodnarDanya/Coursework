function ran() {
    let a = document.querySelector('.div_task1_2')
    a.innerHTML = Math.floor(Math.random() * (100 - 1) + 1) + 1;
}

function coordination() {
    let b = document.querySelector('.div_task2_2');
    b.innerHTML = 'Oтносительно окна: X ' + event.clientX + ', Y ' + event.clientY;
}

let b = document.querySelector('.div_task2');
let res = document.querySelector('.div_task2 .div_task2_2')
b.addEventListener('mousemove', coordination, false);
b.addEventListener('click', clickOn, false);
b.addEventListener('contextmenu', clickOn, false);
b.addEventListener('mousedown', clickOn, false);

function clickOn(ev) {
    if (ev.which == 1) {
        return res.textContent = ev.which + ' left mouse button';
    }
    if (ev.which == 2) {
        ev.preventDefault();
        res.textContent = ev.which + ' middle mouse button';
        return false;
    }
    if (ev.which == 3) {
        ev.preventDefault();
        res.textContent = ev.which + ' right mouse button';
    }
}