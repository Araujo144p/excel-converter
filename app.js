const fs = require("fs")

const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const Html = require("./HtmlParser")
const Writer = require("./Writer")
const Pdf = require("./Pdf")


var reader = new Reader();
var writer = new Writer();

async function main(){
    var data = await reader.Read("users.csv");
    var dataArr = Processor.process(data)
    var usuarios = new Table(dataArr); 
    var HtmlParser = await Html.Parser(usuarios)

    writer.Start(Date.now() + ".html",HtmlParser)
    Pdf.Create(Date.now() + ".pdf",HtmlParser)

}
main()
