const fs = require("fs/promises");

let objeto1 = {"name": "Pablo", "surname": "Martinez", "age": 25};
let data = JSON.stringify(objeto1);

// CON THEN/CATCH
fs.writeFile("lecturaindex.json", data)
.then (() => {
    console.log("Archivo creado correctamente");
})
.then (() => {
    return fs.readFile("lecturaindex.json", "utf-8");
})
.then ((data) => {
    console.log(JSON.parse(data));
})

.catch ((error) => {
    console.log(error);
})



//  CON ASYNC/AWAIT

async function asyncAwait () {
    try {
    await fs.writeFile("lecturaindexAwait.json", data);
    const datos = await fs.readFile("lecturaindexAwait.json", "utf-8")
    console.log(JSON.parse(datos));
    }
    catch (error) {
        console.log(error);
    }
}

asyncAwait()