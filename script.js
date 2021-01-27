const options = {
        type: 'random',
        min: 0,
        max: 2,
        rows:20,
        columns: 50,
}

const matrixObj = new MatrixConstructor(options);
const randomMatrix = matrixObj.getRandomFilledMatrix();
console.log(randomMatrix);
const matrix = new Matrix('cnv', '#app',
    randomMatrix, 5
);

matrix.render();
matrix.drawMatrix();