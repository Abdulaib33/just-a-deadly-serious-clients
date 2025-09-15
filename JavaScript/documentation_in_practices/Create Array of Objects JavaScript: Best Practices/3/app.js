import { addTodoItem, removeTodoItem, getImportantUnfinishedItems} from "./todo";

const todoList = [
  { title: "Finish JavaScript Exercises", priority: 1, completed: false, createdDate: new Date() },
  { title: "Buy Groceries", priority: 2, completed: true, createdDate: new Date() }
];

let updateList = addTodoItem(todoList, "Call mom", 1);
updateList = removeTodoItem(updateList, "Buy Groceries");

const importantTasks = getImportantUnfinishedItems(updateList)

const output = document.getElementById("todo-output");
importantTasks.forEach(task => {
    const li = document.createElement("li")
    li.textContent = task;
    output.appendChild(li)
});

// WELL I HAVE NO IDEA WHY IT DOESNT WORK and it's late im starting to get tired tommorow we start early, if you want to fix it, just compare it to the 3.html file, there's only a slighly difference in the addTodo function but they both does the same things