/*

En este desafío, debes implementar la lógica de un planificador 
de tareas que permita agregar, eliminar y marcar como completadas 
las tareas, así como también mostrar un registro de las mismas. Para ello
debes construir la lógica de la función closure llamada createTaskPlanner 
para que devuelva los siguientes métodos:

addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.

Ejemplo:
Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]
*/
function createTaskPlanner() {
    let tasks = [];
    return {
        addTask(task) {
            return tasks.push({ ...task, completed: false });
        },

        removeTask(idOname) {
            const dtask = tasks.find(
                (task) => task.id === idOname || task.name === idOname
            );
            return tasks.filter((task) => task !== dtask);
        },

        getTasks() {
            return console.log(tasks);
        },

        getPendingTasks() {
            return console.log(tasks.filter((task) => task.completed === false));
        },

        getCompletedTasks() {
            return console.log(tasks.filter((task) => task.completed));
        },

        markTaskAsCompleted(idOname) {
            const task = tasks.find(
                (task) => task.id === idOname || task.name === idOname
            );
            return (task.completed = true);
        },

        getSortedTasksByPriority() {
            const copyTaks = tasks;
            return copyTaks.sort((a, b) => a.priority - b.priority);
        },

        filterTasksByTag(tag) {
            return tasks.filter((task) => task.tags === tag);
        },

        updateTask(taskId, updates) {
            const uptask = tasks.find((task) => task.id === taskId);
            return [...uptask, updates];
        },
    };
}

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"],
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"],
});

planner.markTaskAsCompleted("Llamar a Juan");
planner.getCompletedTasks();
