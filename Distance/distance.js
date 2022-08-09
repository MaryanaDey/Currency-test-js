function findDistance(a, b) {
    let x1 = parseInt(document.getElementById('x1').value);
    let y1 = parseInt(document.getElementById('y1').value);
    let x2 = parseInt(document.getElementById('x2').value);
    let y2 = parseInt(document.getElementById('y2').value);

    const k1 = (b.x - a.x) ** 2;
    const k2 = (a.y - b.y) ** 2;
    distance = Math.sqrt(k1 + k2);
    distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    document.getElementById("res").innerHTML = "Distance" + distance;

}

// function findDistance(a, b) {
//     const k1 = (b.x - a.x) ** 2;
//     const k2 = (a.y - b.y) ** 2;
//     return Math.sqrt(k1 + k2);



// }


// const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// console.log(distance(1, 1, 2, 2));

// const euslideanDistance = (x, y) => {
//     return Math.hypot(...Object.keys(x).map(i => y[i] - x[i]));
// }

// console.log(euslideanDistance([0, 0, 0], [0, 0, 10]));

// function euslideanDistance(x, y) {
//     return Math.hypot(...Object.keys(x).map(i => y[i] - x[i]));

// }

console.log(euslideanDistance([0, 0, 0], [0, 0, 10]));