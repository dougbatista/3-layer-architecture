const calendarService = require("../../core/service/CallendarService");

class CalendarController {
 
    async showCalendarEvents(req, res) {
 
        let { body } = req;
        let { code } = body;

        try {
            let events = await calendarService.showEvents(code);
            return res.status(200).send(events);
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}
module.exports = new CalendarController();