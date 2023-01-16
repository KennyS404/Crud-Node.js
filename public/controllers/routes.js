const Task = require('../models/Task.js')
const testF = require('../models/TaskDelete.js')
module.exports = {
  create: async (req, res) => {
    try{
    await Task.create(req.body)
    return res.redirect('/tasks')
    }catch(err){
      console.log(err)
    }
  },
  list: async (_, res) => {
    const tasks = await Task.findAll()
    return res.render('list', { tasks })
  },
  form: (_, res) => res.render('form'),
  delete: async (_,res) => {
    await testF.delete(req.body)
    return res.redirect('/tasks')
  }
} 