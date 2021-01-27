const options = {
    type: 'random',
    min: 0,
    max: 2,
    rows: 32,
    columns: 64,
}

const matrixObj = new MatrixConstructor(options);
const randomMatrix = matrixObj.getRandomFilledMatrix();
const matrix = new Matrix('cnv', '#app',
    randomMatrix, 5
);

matrix.render();
matrix.drawMatrix();

function random() {
    setInterval(() => {
        let rand = new MatrixConstructor(options).getRandomFilledMatrix();
        matrix.drawMatrix(rand);
        console.log('ok');
    }, 2000);
}

function sort() {
    let x = 0;
    setInterval(() => {
        let myArray = randomMatrix[x];
        if (!myArray) return null;
        myArray.sort((a, b) => b - a);
        randomMatrix[x] = myArray;
        matrix.drawMatrix(randomMatrix);

        x++;
    }, 1000);

}

sort();