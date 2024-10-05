//tasks.js
const express=require('express');
const router=express.Router();

const tasks=[]; //An empty array to store tasks

//middleware to log incoming requests
router.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`); 
    next();

});

//Lets define the GET endpoint to retrive all tasks
router.get('/',(req,res)=>{
    res.json(tasks);
});


// GET endpoint to retrieve a single task by its id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
});
//Now, we define the POST endpont to create tasks

router.post('/',(req,res)=>{
   const { id,title, description } = req.body;
    const task = { id,title, description }; // Create a task object
    tasks.push(task); // Push the task object into the tasks array
    res.status(201).json(task); // Respond with the created task
});

// Next, we define PUT endpoint to update a task by id
router.put('/:id', (req, res) => {
    const { id } = req.params;   //gets the task ID to be updatd
    const { title, description } = req.body;
    const task = tasks.find(task => task.id === parseInt(id)); //find the task with the given id from the list of tasks
//if there is no task with the id
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    // Update the task's title and description
   
    task.title = title;
    task.description = description;
    res.json(task);
});

// Finallly we implement DELETE endpoint to delete a task by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    // Remove the task from the array
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);;
});

module.exports=router;