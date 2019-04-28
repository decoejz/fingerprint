const Computer = require("../models/computer");

class ComputerController{
    async store(req, res) {
        const pc = await Computer.create({
            ipv4: req.body.ipv4,
            ipv6: req.body.ipv6
        });

        return res.json(pc);
    }
}

module.exports = new ComputerController();