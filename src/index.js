let defaultEnv = {
    PORT: 3030,
    SOME_DATABASE_URL: "blah blah",
    SECURITY_TOKEN: "jfseifjesi",
    SECRET_API_KEY: "rroewjwojf",
    JWT_SECRET_KEY: "fodfksfk osfskffsfoskffkfs"
}

console.log(defaultEnv)

let contentToWrite = "";

// PORT = 3030
// SOME_DATABASE_URL = blah blah

// ["PORT", "SOME_DATABASE_URL", ....]
Object.keys(defaultEnv).forEach(envKey => {
    // Add a line to contentToWrite with they key name and key value
    contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
});

console.log(contentToWrite);

// Promises based version of node fs
const fs = require("node:fs/promises");


async function writeEnvFile(){
    console.log("before await")
    try {
        let result = await fs.writeFile(".env", contentToWrite);
        console.log(result)
    } catch (error) {
        console.log("Error occured writing the file: ", error);
    }
    
    console.log("After await")
}

writeEnvFile();

async function app(){
    console.log("Before calling async writer")
    await writeEnvFile().then(() => {
        console.log("File writing may be finished?")
    })
    console.log("After calling async writer")
}
app();

// console.log("before promise")
// fs.writeFile(".env", contentToWrite).then(() => {
//     console.log("After the file has been written");
// }).then(() => {

    
//     console.log("After the file has been written (second time)");
// }).catch((error) => {
//     console.log("This error occured " + error);
// })
// console.log("After promise")






// File System
// const fs = require("node:fs");

// // fs.writeFileSync(".env", contentToWrite);
// // console.log("File has been written");

// console.log("Before fs callback");

// // Asyncronous way of writing files with error handling
// // fs.writeFile(filePath, fileContents, callback);
// fs.writeFile(".env", contentToWrite, (error) => {
//     if (error){
//         console.log("File writing had errors!");
//     } else {
//         console.log("File has been written!");
        
//     }
// });

// console.log("After fs callback");