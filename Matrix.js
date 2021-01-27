class Matrix {
    static row = 0;
    static elem = 0;

    constructor(canvas, app, matrix = [], step = 5) {
        this.canvas = canvas;
        this.app = app;
        this.matrix = matrix;
        this.step = step;
    }

    drawBlock(x = 0, y = 0, w = 0, h = 0, matrix = []) {

        if (Matrix.elem % this.matrix[0].length === 0) {
            Matrix.elem = 0;
        }

        const context = this.$canvas.getContext('2d');

        switch (this.matrix[Matrix.row][Matrix.elem]) {
            case 0:
                context.fillStyle = "Green";
                break;
            case 1:
                context.fillStyle = "Blue";
                break;
            case 2:
                context.fillStyle = "Yellow";
        }

        context.fillRect(x, y, w, h);
        Matrix.elem++;
    }

    drawLine(y, w, h) {
        if (Matrix.row % this.matrix.length === 0) {
            Matrix.row = 0;
        }
        for (let x = 0; x < this.matrix[0].length * this.step; x += this.step) {
            this.drawBlock(x, y, w, h, this.matrix);
        }
        Matrix.row++;

    }

    drawMatrix() {
        for (let y = 0; y < this.matrix.length * this.step; y += this.step) {
            this.drawLine(y, this.step, this.step);
        }
    }

    init() {
        const canvas = document.createElement("canvas");
        this.$canvas = canvas;
        const app = document.querySelector(this.app);
        canvas.classList.add(this.canvas);
        app.append(canvas);
    }

    render() {
        this.init();
    }
}