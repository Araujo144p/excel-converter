const pdf = require("html-pdf")

class Pdf{
    static Create(filename, html){
        pdf.create(html, {}).toFile(filename, (err)=> {})
    }
}

module.exports = Pdf;