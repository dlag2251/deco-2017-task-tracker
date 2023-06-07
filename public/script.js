// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(form.elements.taskType.value)

    addTask(
        form.elements.taskName.value,
        form.elements.taskType.value,
        form.elements.taskRate.value,
        form.elements.taskTime.value,
        form.elements.taskClient.value,
        form.elements.taskPrice.value,
    )
    console.log(taskList)
})


function displayTask(task) {
    let item = document.createElement("li");
    item.setAttribute("data-id", task.id);
    item.innerHTML = 
    `<p><strong>${task.name}</strong><br><br>
    Caffeine: ${task.rate} mg<br>
    Type: ${task.type}<br>
    Time: ${task.date} <br> 
    Quantity: ${task.time} <br> 
    Calories: ${task.client} <br> 
    Price: ${task.price}</p>`;

    tasklist.appendChild(item);


    // Clear the value of the input once the task has been added to the page
    form.reset();

    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("DELETE ITEM");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task

    // Listen for when the delete button is clicked
    delButton.addEventListener("click", function (event) {

        taskList.forEach(function (taskArrayElement, taskArrayIndex) {
            if (taskArrayElement.id == item.getAttribute('data-id')) {
                taskList.splice(taskArrayIndex, 1)
            }
        })

        // Make sure the deletion worked by logging out the whole array
        console.log(taskList)

        item.remove(); // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element

    })
};



// Creating an array called 'taskList'
var taskList = [];


function addTask(name, type, rate, time, client, price) {

    let task = {
        name,
        type,
        id: Date.now(),
        date: new Date().toISOString(),
        rate,
        time,
        client, 
        price
    }

    taskList.push(task);
    displayTask(task);

}

// Test values for function
addTask("Latte", "Coffee", 100, 2, 110, 4);

// Logging array to the console.
console.log(taskList)





// ATTEMPTS TO ADAPT TEMPLATE CODE TO IMPLEMENT IMAGE FUNCTIONALITY & LOCAL STORAGE FEATURES:

// import images from './images/*.png';
// console.log(images)

// // Setting up variables for our HTML elements using DOM selection
// const form = document.getElementById("taskform");
// const tasklist = document.getElementById("tasklist");


// // Handle form submission, using input values to add new task
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     addTask(
//         form.elements.taskName.value,
//         form.elements.taskType.value,
//         form.elements.taskRate.value,
//         form.elements.taskTime.value,
//         form.elements.taskClient.value,
//     )
// })

// // General function for fetching tasks from localStorage and rendering to screen

// function displayTasks() {

//     // Clear the tasklist <ul> element's content
//     tasklist.innerHTML = ""
    
//     // Fetch and parse tasks array from localStorage
//     let localTasks = JSON.parse(localStorage.getItem('tasks'))
    
//     // If there are tasks (localStorage item exists)
//         if (localTasks !== null) {

//             // Loop through all tasks in the array
//             localTasks.forEach(function (task) {

//                let taskImage = null;
//                  switch (task.type) {
//                  case 'Coffee':
//                   taskImage = images['coffee']
//                  case 'Tea':
//                   taskImage = images['tea']
//                  case 'Soft Drink':
//                   taskImage = images['soft-drink']
//                  case 'Energy Drink':
//                   taskImage = images['energy-drink']
//                  break;
//                 default:
//                  break;
//             }

//         // Create new list item and populate with content (including data attribute for ID)
//         let item = document.createElement("li");
//         item.setAttribute("data-id", task.id);
//         item.innerHTML = `<p><strong>${task.name}</strong><br>${task.type}</p><img src='${taskImage}' width='50'/>`;
//         tasklist.appendChild(item);

//         // Clear the value of the input once the task has been added to the page
//         delButton.addEventListener("click", function (event) {

//             // Loop through all the tasks to find the matching ID and remove it from the array  
//             localTasks.forEach(function (taskArrayElement, taskArrayIndex) {
//                 if (taskArrayElement.id == item.getAttribute('data-id')) {
//                     localTasks.splice(taskArrayIndex, 1)
//                 }
//             })
//             // Update localStorage with the newly spliced array (converted to a JSON string)
//             localStorage.setItem('tasks', JSON.stringify(localTasks))
//             item.remove(); // Remove the task item from the page when button clicked
//             // Because we used 'let' to define the item, this will always delete the right element
//         })
//     })
// }

// // Creating a function called 'addTask'

// function addTask(name, type, rate, time, client, price) {
// // Creating the object, directly passing in the input parameters
//     let task = {
//         name,
//         type,
//         id: Date.now(),
//         date: new Date().toISOString(),
//         rate,
//         time,
//         client, 
//         price
// }

// // Fetch and parse tasks array from localStorage 
//     let localTasks = JSON.parse(localStorage.getItem('tasks'))
// // If no tasks exist in local storage, create a new array using the current task
//     if (localTasks == null) {
//      localTasks = [task]
//     } else {
//      // Otherwise check to see if a task with the same ID already exists (just in case)
//      if (localTasks.find(element => element.id === task.id)) {
//           console.log('Task ID already exists')
//         } else {
//           // If not, push the new task to the array
//          localTasks.push(task);
//         }
//     }   

// // Update localStorage with the array (converted to a JSON string)
// localStorage.setItem('tasks', JSON.stringify(localTasks))
// // Call function to display the tasks on the DOM
// displayTasks();
// }

// // Call the function with test values for the input paramaters
// addTask("Latte", "Coffee", 100, 2, 110, 4);
