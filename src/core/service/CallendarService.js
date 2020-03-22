const { google } = require("googleapis");
const authToken = require("../validation/GoogleAPIValidation");

class CalendarService {
    async showEvents(pageCode) {

        let token = await authToken.validateToken();
        const { access_token } = token.credentials;

        if (!pageCode && !access_token) {
            let { authUrl } = token;
            return authUrl;
        }
        else {
            const auth = await authToken.validateToken(pageCode);
            const calendar = google.calendar({ version: 'v3', auth });
            return new Promise((resolve, reject) => {
                calendar.events.list({
                    calendarId: 'primary',
                    alwaysIncludeEmail: true,
                    timeMin: (new Date()).toISOString(),
                    maxResults: 60,
                    singleEvents: true
                }, (err, res) => {
                    console.log(res.data);
                    if (err) return reject(err);
                    let { data } = res;
                    resolve(data);
                });
            });
        }
    }
}

module.exports = new CalendarService();