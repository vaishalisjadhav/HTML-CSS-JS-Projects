document.getElementById('decrease-button').addEventListener('click', function() {
    let count = parseInt(document.getElementById('count').innerText);
    if (count > 0) {
        count--;
    }
    document.getElementById('count').innerText = count;
});

document.getElementById('increase-button').addEventListener('click', function() {
    let count = parseInt(document.getElementById('count').innerText);
    count++;
    document.getElementById('count').innerText = count;
});
