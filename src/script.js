let i = 0;

function showCircle(event){
    let div = document.createElement('div');
    div.className = `circle c${i}`;
    document.body.querySelector('.button').appendChild(div);
    document.body.querySelector('.circle').style.top = `${event.offsetY}px`;
    document.body.querySelector('.circle').style.left = `${event.offsetX}px`;
    document.body.querySelector('.circle').style.height = `1`;
    setTimeout(() => {
        document.body.querySelector('.circle').style.top = `${event.offsetY - 250}px`;
        document.body.querySelector('.circle').style.left = `${event.offsetX - 250}px`;
        document.body.querySelector('.circle').style.width = `500px`;
        document.body.querySelector('.circle').style.height = `500px`;
        document.body.querySelector('.circle').style.opacity = `0`;
        setTimeout(() => {
            div.remove();
        }, 500);
    }, 500)
    i++;
}