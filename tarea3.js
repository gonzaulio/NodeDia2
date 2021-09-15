
let objinicial = {"name": "", "surname": "", "age": ""};

const readline = require("readline")
const fs = require("fs/promises");


function pregunta() {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
            });


        rl.question("¿Cual es tu nombre?: ", (respuesta1) => {
            resolve(respuesta1);
            objinicial.name = respuesta1;
            rl.question(`Vale ${respuesta1}, ahora dime tu apellido: `, (respuesta2) => {
                resolve(respuesta2);
                objinicial.surname = respuesta2;
                rl.question(`¿Cuántos años tienes ${respuesta1} ${respuesta2}?: `, (respuesta3) => {
                    resolve(respuesta3);
                    objinicial.age = parseFloat(respuesta3)
                    // console.log(objinicial);
                    rl.close();


                    // CON THEN/CATCH
                    let data = JSON.stringify(objinicial);

                    fs.writeFile("lecturatarea3.json", data)
                    .then (() => {
                        console.log("Archivo creado correctamente");
                    })
                    .then (() => {
                        return fs.readFile("lecturatarea3.json", "utf-8");
                    })
                    .then ((data) => {
                        console.log(JSON.parse(data));
                    })

                    .catch ((error) => {
                        console.log(error);
                    })
                })
            })            
        })
    });
    return question;
}

pregunta();



