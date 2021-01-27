
class MatrixConstructor{
    constructor(options) {
        this._type = options.type;
        this._min = options.min;
        this._max = options.max;
        this._rows = options.rows;
        this._columns = options.columns;

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomFilledMatrix(){

        const rows = new Array(this._rows);
        let columns = new Array( this._columns);
        const rowsLength = rows.length;
        const columnsLength = columns.length;

        for (let x = 0; x < rowsLength; x++){
            columns = new Array( this._columns);
            for(let y = 0; y < columnsLength; y++){
                columns[y] = this.getRandomIntInclusive(this._min, this._max);
            }
            rows[x] = columns;
        }
        return rows;
    }

    start(){
        if(this._type === 'random'){
            return this.getRandomFilledMatrix();
        }

    }
}


