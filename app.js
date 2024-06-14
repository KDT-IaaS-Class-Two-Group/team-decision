const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === GET) {
  } else if (req.method === POST) {
  } else {
  }
});

const PORT = 3050;
server.listen(PORT, () => {
  console.log(`server running`);
  console.log(`http://localhost:${PORT}`);
});
