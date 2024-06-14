const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if(req.url === "/"){
      fs.readFile("./public/index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: File Not Found");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
        }
        res.end();
      });
    }

  } else if (req.method === "POST") {
  } else {
  }
});

const PORT = 3050;
server.listen(PORT, () => {
  console.log(`server running`);
  console.log(`http://localhost:${PORT}`);
});
