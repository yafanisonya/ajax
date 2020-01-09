var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号!Example:\nnode server.js 8888 ");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  console.log("有人发请求过来！路径为：" + pathWithQuery);

  if (path === "/index.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    let string = fs.readFileSync('public/index.html').toString()
    const page1 = fs.readFileSync('db/page1.json').toString()
    const array = JSON.parse(page1)
    const result = array.map(item => `<li>${item.id}</li>`).join('')
    string = string.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)
    response.write(string);
    response.end();
  } else if (path === "/style.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(fs.readFileSync('public/style.css'));
    response.end();
  } else if (path === "/main.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(fs.readFileSync('public/main.js'));
    response.end();
  } else if (path === "/main2.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(fs.readFileSync('public/main2.js'));
    response.end();
  } else if (path === "/index2.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(fs.readFileSync('public/index2.html'));
    response.end();
  } else if (path === "/index.xml") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/xml;charset=utf-8");
    response.write(fs.readFileSync('public/index.xml'));
    response.end();
  } else if (path === "/index.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.write(fs.readFileSync('public/index.json'));
    response.end();
  } else if (path === "/page2.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.write(fs.readFileSync('db/page2.json'));
    response.end();
  } else if (path === "/page3.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.write(fs.readFileSync('db/page3.json'));
    response.end();
  }
  else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write("你访问的页面不存在");
    response.end();
  }
});

server.listen(port);
console.log(
  "开启" + port + "端口监听成功，请用浏览器打开 http://localhost:" + port
);