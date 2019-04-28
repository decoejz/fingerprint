const Computer = require('../models/computer');

class ComputerController {
  async store(req, res) {
    const pc = await Computer.create({ body: req.body });
    console.log(req.body);

    return res.json(pc);
  }

  async show(req, res) {
    const pc = await Computer.find({});
    return res.json(pc);
  }
}

module.exports = new ComputerController();
