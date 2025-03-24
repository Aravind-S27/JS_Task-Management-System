// script.js

// Task class to represent a task object
class Task {
    constructor(name, description, date, status = 'pending') {
        this.name = name;
        this.description = description;
        this.date = date;
        this.status = status;
    }
}

// Retrieve tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Initialize current filter to 'all'
let currentFilter = 'all';
// Initialize current search term to empty string
let currentSearch = '';

// Function to render tasks on the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Filter tasks based on current filter
    let filteredTasks = currentFilter === 'all' ? tasks : tasks.filter(task => task.status === currentFilter);

    // Filter tasks based on current search term
    if (currentSearch) {
        filteredTasks = filteredTasks.filter(task =>
            task.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            task.description.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    // Create and append task items to the task list
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        if (task.status === 'completed') {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <div class="task-details">
                <h3>${task.name}</h3>
                <p>${task.description}</p>
                <p>Date: ${task.date}</p>
            </div>
            <div class="task-actions">
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
                <button class="status-btn" data-index="${index}">${task.status === 'pending' ? 'Complete' : 'Pending'}</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });

    // Attach event listeners to task actions
    attachEventListeners();
}

// Function to add a new task
function addTask() {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;

    if (!name.trim()) {
        alert('Task name cannot be empty.');
        return;
    }

    if (!date) {
        alert('Please select a date.');
        return;
    }

    tasks.push(new Task(name, description, date));
    saveTasks();
    renderTasks();
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDate').value = '';
}

// Function to edit a task
function editTask(index) {
    const task = tasks[index];
    const newName = prompt('Enter new task name:', task.name);
    const newDescription = prompt('Enter new task description:', task.description);
    const newDate = prompt('Enter new task date (YYYY-MM-DD):', task.date);

    if (newName !== null && newDescription !== null && newDate !== null) {
        if (!newName.trim()) {
            alert('Task name cannot be empty.');
            return;
        }
        if (!newDate) {
            alert('Date cannot be empty');
            return;
        }

        tasks[index].name = newName;
        tasks[index].description = newDescription;
        tasks[index].date = newDate;
        saveTasks();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

// Function to toggle the status of a task (pending/completed)
function toggleStatus(index) {
    tasks[index].status = tasks[index].status === 'pending' ? 'completed' : 'pending';
    saveTasks();
    renderTasks();
}

// Function to filter tasks based on status
function filterTasks(status) {
    currentFilter = status;
    renderTasks();

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[data-status="${status}"]`).classList.add('active');
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to attach event listeners to task actions
function attachEventListeners() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => editTask(btn.dataset.index));
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteTask(btn.dataset.index));
    });

    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleStatus(btn.dataset.index));
    });

    // Attach event listener to search input
    document.getElementById('searchTask').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderTasks();
    });
}

// Attach event listener to add task button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Attach event listeners to filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterTasks(btn.dataset.status));
});

// Initial rendering of tasks and setting the active filter button
renderTasks();
document.querySelector(`.filter-btn[data-status="${currentFilter}"]`).classList.add('active');