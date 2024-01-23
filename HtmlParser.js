const ejs = require("ejs")

class Html{
    static async Parser(table){
        return await ejs.renderFile("./table.ejs",{header: table.header, rows: table.body})
    }
}

module.exports = Html;