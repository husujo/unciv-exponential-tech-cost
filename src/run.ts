// bun ./src/run.ts
const text = await Bun.file("./src/Techs.json").text()
const obj = JSON.parse(text.replace(/\/\/.*$/gm, ''))
for (const col of obj) {
    col.techCost = Math.floor(col.techCost * Math.pow(1.1, col.columnNumber))
}
Bun.write('./jsons/Techs.json', JSON.stringify(obj,null,2))