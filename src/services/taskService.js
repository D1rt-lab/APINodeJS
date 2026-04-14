const fs = require('fs');
const path = require('path');
const { createTask } = require('../models/taskModel');

const filePath = path.join(__dirname, '../data/tasks.json');

// 🔹 Ler arquivo
function readTasks() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// 🔹 Salvar arquivo
function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// 🔹 Gerar próximo ID
function getNextId(tasks) {
  if (tasks.length === 0) return 1;
  return Math.max(...tasks.map(t => t.id)) + 1;
}

// 🔹 Listar
function listTasks() {
  return readTasks();
}

// 🔹 Criar
function createNewTask(data) {
  const tasks = readTasks();
  const id = getNextId(tasks);

  const task = createTask(id, data.title, data.completed ?? false);

  tasks.push(task);
  saveTasks(tasks);

  return task;
}

// 🔹 Buscar por ID
function getTaskById(id) {
  const tasks = readTasks();
  return tasks.find(t => t.id === id) || null;
}

// 🔹 Atualizar
function updateTask(id, data) {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    ...(data.title !== undefined ? { title: data.title } : {}),
    ...(data.completed !== undefined ? { completed: data.completed } : {}),
  };

  saveTasks(tasks);
  return tasks[index];
}

// 🔹 Deletar
function deleteTask(id) {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) return false;

  tasks.splice(index, 1);
  saveTasks(tasks);

  return true;
}

module.exports = {
  listTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
};