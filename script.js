const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="removeBtn">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    li.querySelector('.removeBtn').addEventListener('click', removeTask);
    li.addEventListener('click', toggleComplete);
  }
}

function removeTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

function toggleComplete(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
}

taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
