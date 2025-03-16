
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // Listen for form submission
  form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevents the default form submission (page reload)

      const taskDescription = document.getElementById('new-task-description').value;

      if (taskDescription.trim() !== "") {
          // Create a new list item
          const li = document.createElement('li');
          li.textContent = taskDescription;

          // Add a delete button to each task
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              li.remove();  // Remove the task when the delete button is clicked
          });

          li.appendChild(deleteButton);  // Attach the delete button to the list item
          taskList.appendChild(li);  // Add the new task to the task list

          // Clear the input field after submission
          document.getElementById('new-task-description').value = '';
      }
  });
});
