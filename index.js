const express = require('express');
const app = express();
//const utils = require('./utils/task-schema.js')

app.use(express.json());

// const tasks = [
//     {
//         id: 1,
//         name: "Task 1",
//         completed: false
//     },
//     {
//         id: 2,
//         name: "Task 2",
//         completed: false
//     },
//     {
//         id: 3,
//         name: "Task 3",
//         completed: false
//     }
// ]

app.post("/calc", (request, response) => {

    // width, unit_of_width
    // length, unit_of_length
    // weight, unit_of_weight
    // whether_standard

    if (!(request.body.length_unit == "mm" || request.body.length_unit == "inch")){
        response.status(400).send("Envelope unit for length is neither the accepted mm or inch.");
        return;
    }

    if (request.body.length < 0) {
        response.status(400).send("Envelope length received is not positive.");
        return;
    }
    if (request.body.length > 380) {
        response.status(400).send("Envelope length received exceeds maximal 380 mm.");
        return;
    }


});


// // GET
// app.get("/api/tasks", (request, response) => {
//     response.send(tasks);
// })

// //GET by id
// app.get("/api/tasks/:id", (request, response) => {
//     const taskId = request.params.id;
//     const task = tasks.find(task => task.id === parseInt(taskId));
//     if (!task) {
//         return response.status(404).send("The task with the provided ID does not exist.")
//     }
//     response.send(task);
// });

// const {taskSchema} = require('./utils/task-schema.js')

// // POST

// app.post("/api/tasks", (request, response) => {

//     const {error, value} = taskSchema.validate(request.body);

//     if (error) return response.status(400).send('The name should be at least 3 chars long!');

//     //lets create the new object we will pass to the tasks array

//     const task = {
//        id: tasks.length + 1,
//        name: request.body.name,
//        completed: request.body.completed
//     }

//     //lets push in to the tasks array

//     tasks.push(task);

//     response.send(task);

// });


// // PUT
// app.put("/api/tasks/:id", (request, response) => {
//     const taskId = request.params.id;
//     const task = tasks.find(task => task.id === parseInt(taskId));
//     if (!task) {
//         return response.status(404).send("The task with the provided ID does not exist.")
//     }

//     const {error, value} = taskSchema.validate(request.body);

//     if (error) return response.status(400).send('The name should be at least 3 chars long!');

//     //lets create the new object we will pass to the tasks array


//     task.name = request.body.name,
//     task.completed = request.body.completed


//     response.send(task);

// });


// // PATCH
// app.patch("/api/tasks/:id", (request, response) => {
//     const taskId = request.params.id;
//     const task = tasks.find(task => task.id === parseInt(taskId));
//     if (!task) {
//         return response.status(404).send("The task with the provided ID does not exist.")
//     }

//     const {error, value} = taskSchema.validate(request.body);

//     if (error) return response.status(400).send('The name should be at least 3 chars long!');

//     //lets create the new object we will pass to the tasks array


//     task.name = request.body.name;

//     if (request.body.completed) {
//         task.completed = request.body.completed
//     }

//     response.send(task);

// });


// // DELETE
// app.delete("/api/tasks/:id", (request, response) => {
//     const taskId = request.params.id;
//     const task = tasks.find(task => task.id === parseInt(taskId));
//     if (!task) {
//         return response.status(404).send("The task with the provided ID does not exist.")
//     }

//     const index = tasks.indexOf(task);
//     tasks.splice(index, 1);
//     response.send(task);
// });


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port ${port}...'));