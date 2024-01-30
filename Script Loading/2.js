let c = 0;

function addToCounter() {
    c++;
    document.getElementById('counter').innerHTML = `${c} click(s)`;
}