let isOpened = false;
const container = document.getElementById('container');
const content = '<div class="opened-block"><button onclick="addToCounter()">Click</button><div id="counter"></div></div>'

function blockSwitcher() {
    if (!isOpened) {
        container.innerHTML = content;
        isOpened = true;
    }
    else {
        container.innerHTML = 'Block closed';
        isOpened = false;
    }
}