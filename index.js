const http = require("http");
const fs = require("fs");
let hc = "";
let pc = "";
let rc = "";
const port = require("minimist")(process.argv.slice(1));
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  hc = home;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  rc = registration;
});
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  pc = project;
});
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(pc);
        response.end();
        break;
      case "/registration":
        response.write(rc);
        return response.end();
      default:
        response.write(hc);
        response.end();
        break;
    }
  })
  .listen(port);
