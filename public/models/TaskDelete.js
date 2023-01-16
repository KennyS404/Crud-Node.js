const Task = require('./Task')
async function testF(id){
    deleteTask = await Task.destroy({ where: { id: 1 } });
      console.log(`deleted row(s): ${deleteTask}`);
   }
module.exports = testF()
