function createTask(id, title, completed = false) {
  return {
    id,
    title,
    completed,
  };
}

module.exports = { createTask };