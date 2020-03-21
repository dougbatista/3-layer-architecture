class DoeController {
    async doeReturn(req, res) {
        return res.status(200).send("DOE")
    }
    async insertSomethingReturn(req, res) {
        let { body } = req;
        res.status(200).json(body);
    }
}

module.exports = new DoeController();