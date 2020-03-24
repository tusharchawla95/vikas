// const fs = require("./fs");

// fs.readFile("./test.json", (err, data) =>  {
//     if(err) console.log(err);
//     console.log("data", data);
// })


const fs = require("fs");

fs.readFile("./test.json", "utf8", (err, data) => {
    if(err) console.log(err);
    console.log("data async", data)
});

try {
    let data = fs.readFileSync("./test.json", "utf8");
    console.log("data sync", data)
} catch(err) {
    console.log(err);
}

