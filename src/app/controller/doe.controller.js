const service = require("../../core/validation/GoogleAPIValidation");
class DoeController {
    async doeReturn(req, res) {
        try {
            let content = await service.authorize();
            return res.status(200).json(content)
        } catch (error) {
            res.status(500).error("BITCH");
        }
    }
    async insertSomethingReturn(req, res) {
        let { body } = req;
        res.status(200).json(body);
    }
}

module.exports = new DoeController();