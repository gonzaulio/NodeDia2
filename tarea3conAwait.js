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
                    rl.close();


                    // CON ASYNC/AWAIT
                    let data = JSON.stringify(objinicial);
                    
                    async function asyncAwait () {
                        try {
                            await fs.writeFile("lecturatarea3Await.json", data);
                            const datos = await fs.readFile("lecturatarea3Await.json", "utf-8")
                            console.log(JSON.parse(datos));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }

                    asyncAwait()
                })
            })            
        })
    });
    return question;
}

pregunta();