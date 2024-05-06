const fs = require("fs");

fs.readFile('fileOne.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // Display the file content
});