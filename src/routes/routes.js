const {Router} = require('express') 
const  Task = require('../models/Task')

const router = Router()

router.get('/', async (req,res) =>{

    const tasks = await Task.find().lean()
    
    res.render('index', {tasks: tasks})
})

router.post('/task/add',async (req,res) =>{

    const task = Task(req.body)

    const taskSaved = await task.save()
    console.log(taskSaved)

    res.redirect('/')
})

router.get('/about', (req,res) => {
   res.render('about')
})

module.exports = {
    router
}