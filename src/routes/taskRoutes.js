const {
  handleGetTasks,
  handleGetTaskById,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
} = require('../controllers/taskController');

function taskRoutes(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // GET /tasks
  if (path === '/tasks' && req.method === 'GET') {
    return handleGetTasks(req, res);
  }

  // POST /tasks
  if (path === '/tasks' && req.method === 'POST') {
    return handleCreateTask(req, res);
  }

  // Rotas com ID
  const match = path.match(/^\/tasks\/(\d+)$/);

  if (match) {
    const id = Number(match[1]);

    if (req.method === 'GET') {
      return handleGetTaskById(req, res, id);
    }

    if (req.method === 'PUT') {
      return handleUpdateTask(req, res, id);
    }

    if (req.method === 'DELETE') {
      return handleDeleteTask(req, res, id);
    }
  }

  // Rota não encontrada
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Rota não encontrada' }));
}

module.exports = taskRoutes;