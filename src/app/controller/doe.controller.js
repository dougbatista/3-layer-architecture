const service = require("../../core/validation/GoogleAPIValidation");
class DoeController {
    async doeReturn(req, res) {
        try {
            let content = await service.validateToken();
            return res.status(200).json(content)
        } catch (err) {
            res.status(500).send("BITCH " + err);
        }
    }
    async insertSomethingReturn(req, res) {
        let { body } = req;
        let { code } = body;

        await service.validateToken(code);
        
        res.status(200).json(body);
    }
}

module.exports = new DoeController();