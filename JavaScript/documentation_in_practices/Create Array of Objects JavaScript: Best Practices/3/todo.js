// ➕ Add a new item (immutable)
export const addTodoItem = (list, title, priority) => [
    ...list,
    {title, priority, completed: false, createdDate: new Date()}
];

export const removeTodoItem = (list, title) => {
    list.filter(item => item.title.toLowerCase() !== title.toLowerCase())
}

export const getImportantUnfinishedItems = (list) => {
    list 
        .filter(item => item.priority === 1 && !item.completed)
        .map(item => `${item.title} (Created: ${item.createdDate.toLocaleDateString()})`)
}