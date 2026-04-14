const {
  listTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../services/taskService');

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch {
        reject();
      }
    });
  });
}

// 🔹 GET /tasks
async function handleGetTasks(req, res) {
  sendJson(res, 200, listTasks());
}

// 🔹 GET /tasks/:id
async function handleGetTaskById(req, res, id) {
  const task = getTaskById(id);

  if (!task) {
    return sendJson(res, 404, { message: 'Tarefa não encontrada' });
  }

  sendJson(res, 200, task);
}

// 🔹 POST /tasks
async function handleCreateTask(req, res) {
  try {
    const body = await parseBody(req);

    if (!body.title) {
      return sendJson(res, 400, { message: 'Título obrigatório' });
    }

    const task = createNewTask(body);
    sendJson(res, 201, task);
  } catch {
    sendJson(res, 400, { message: 'JSON inválido' });
  }
}

// 🔹 PUT /tasks/:id
async function handleUpdateTask(req, res, id) {
  try {
    const body = await parseBody(req);
    const updated = updateTask(id, body);

    if (!updated) {
      return sendJson(res, 404, { message: 'Tarefa não encontrada' });
    }

    sendJson(res, 200, updated);
  } catch {
    sendJson(res, 400, { message: 'JSON inválido' });
  }
}

// 🔹 DELETE /tasks/:id
function handleDeleteTask(req, res, id) {
  const removed = deleteTask(id);

  if (!removed) {
    return sendJson(res, 404, { message: 'Tarefa não encontrada' });
  }

  sendJson(res, 200, { message: 'Removida' });
}

module.exports = {
  handleGetTasks,
  handleGetTaskById,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
};