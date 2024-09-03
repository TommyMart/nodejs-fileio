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


const fs = require("node:fs");

// fs.writeFileSync(".env", contentToWrite);
// console.log("File has been written");

console.log("Before fs callback");

// Asyncronous way of writing files with error handling
// fs.writeFile(filePath, fileContents, callback);
fs.writeFile(".env", contentToWrite, (error) => {
    if (error){
        console.log("File writing had errors!");
    } else {
        console.log("File has been written!");
        
    }
});

console.log("After fs callback");