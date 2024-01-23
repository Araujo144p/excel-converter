class Processor{
    static process(data){
        var linebreak = data.split("\r\n")
        var rows = []

        linebreak.forEach(row => {
            var column = row.split(",")
            rows.push(column)
        })
        
        return rows
    }
}

module.exports = Processor;