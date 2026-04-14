const http = require('http');
const taskRoutes = require('./src/routes/taskRoutes');

const PORT = 3000;

const server = http.createServer((req, res) => {
  taskRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});