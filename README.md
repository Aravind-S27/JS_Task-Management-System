Task Management App
Overview
The Task Management App is a simple web application that allows users to create, edit, delete, and manage tasks. Users can filter tasks based on their status (all, pending, completed) and search for specific tasks by name or description. The application uses local storage to persist tasks across page reloads.

Features
Add Tasks: Users can input a task name, description, and due date to create a new task.
Edit Tasks: Users can modify existing tasks, including changing the name, description, and due date.
Delete Tasks: Users can remove tasks from the list.
Toggle Task Status: Users can mark tasks as completed or pending.
Filter Tasks: Users can filter tasks by status (all, pending, completed).
Search Tasks: Users can search for tasks by name or description.
Persistent Storage: Tasks are saved in the browser's local storage, allowing them to persist even after refreshing the page.
Technologies Used
HTML
CSS
JavaScript
Getting Started
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari)
Basic understanding of HTML, CSS, and JavaScript (optional)
Running the Application
Clone the Repository:

bash
Run
Copy code
git clone <repository-url>
cd task-management-app
Open the HTML File: Open index.html in your web browser. You can do this by double-clicking the file or dragging it into an open browser window.

Using the Application:

Enter a task name and description in the input fields.
Select a due date using the date picker.
Click the "Add Task" button to create a new task.
Use the filter buttons to view tasks based on their status.
Use the search bar to find specific tasks.
Click on the "Edit", "Delete", or "Complete/Pending" buttons to manage tasks.
File Structure
Run
Copy code
task-management-app/
│
├── index.html        # Main HTML file
├── style.css         # CSS styles for the application
└── script.js         # JavaScript functionality for the application
Additional Features
Responsive Design: The application is designed to be responsive and should work well on various screen sizes.
User Feedback: Alerts are provided for empty task names and dates to ensure valid input.
Dynamic Updates: The task list updates dynamically without needing to refresh the page.
Future Improvements
Implement user authentication to allow multiple users to manage their tasks.
Add due date reminders or notifications.
Enhance the UI with more advanced styling or animations.
Allow exporting tasks to a file (e.g., CSV or JSON).
License
This project is open-source and available under the MIT License.
