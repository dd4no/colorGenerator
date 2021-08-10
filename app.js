

function changeColor()  {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for ( let i=1; i<7; i++) {
        let index = Math.floor(Math.random() * 16);
        color += hex[index];
        }
    document.body.style.background = color;
    document.getElementById('#color').innerHTML = color;    
};

function rand() {
    return Math.floor(Math.random() * 256);
}
function rand2() {
    return Math.random().toFixed(2);
}

function changeRGB(){
    let color = "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
    document.body.style.background = color;
    document.getElementById('#rgbcolor').innerHTML = color;
}
function changeRGBA(){
    let color = "rgba(" + rand() + ", " + rand() + ", " + rand() + ", " + rand2() + ")";
    document.body.style.background = color;
    document.getElementById('#rgbacolor').innerHTML = color;
}