const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////////////
//FILE

//Blocking, Synchronous way
// const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// const someText = `This is what we know about avocado ${readFile}\n Created on ${Date.now()}`
// const writeFile = fs.writeFileSync("./txt/output.txt", someText);
// console.log(writeFile);

//Non-blocking, Asynchronous way
// console.log("before1")

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//             console.log(data3)

//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", () => {
//                 console.log("file done successfully")
//             })
//         })
//     })
// })

// console.log("before2")


////////////////////////////////////////////
//HTTP, SERVER


const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === "/" || pathName === "/overview") {
        res.end("Hello from the server");
    } else if (pathName === "/product") {
        res.end("Hello from the product");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "helloworld"
        })
        res.end("<h1>Page not found</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to request on port 8000");
})
