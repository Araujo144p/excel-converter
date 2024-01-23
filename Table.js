class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.body = arr;
    }

    get ColumnsCount(){
        return this.header.length;
    }

    get RowsCont(){
        return this.body.length;
    }
}

module.exports = Table;