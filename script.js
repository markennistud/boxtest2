const box = document.querySelector('.box');
let x = 10;
let y = 10;
let xSpeed = 4;
let ySpeed = 4;

function update() {
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

function animate() {
    if (x + box.clientWidth >= window.innerWidth || x <= 0) {
        xSpeed = -xSpeed;
    }
    if (y + box.clientHeight >= window.innerHeight || y <= 0) {
        ySpeed = -ySpeed;
    }
    x += xSpeed;
    y += ySpeed;
    update();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    x = 10;
    y = 10;
});
