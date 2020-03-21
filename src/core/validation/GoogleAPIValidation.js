const readline = require("readline");
const { google } = require("googleapis");
const fileReader = require("../utils/FileReader");
const config = require("../config");

class AuthorizeClient {
    async authorize() {
        try {
            
            const credentials = await fileReader.readFile(config.credentialsJson);
            this.generateToken(credentials);

        } catch (error) { }
    }

    async generateToken(credentials) {


        const { client_secret, client_id, redirect_uris } = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2 (
            client_id, client_secret, redirect_uris[0]
        );
        try {
            let token = await fileReader.readFile(config.tokenJson);
            oAuth2Client.setCredentials(JSON.parse(token));
        } catch (error) {
            console.log("error -- ", error)
        }
    }

}

module.exports = new AuthorizeClient();

// async function authorize() {
//     try {
//         const credentials = await fileReader.readFile(config.credentialsJson);
//         // this.generateToken(credentials);
//         console.log("creden ==", credentials)
//     } catch (error) {
//         console.log("error authorize", error)
//     }
// }

// function generateToken(credentials) {


//     const { client_secret, client_id, redirect_uris } = credentials.installed;
//     const oAuth2Client = new google.auth.OAuth2(
//         client_id, client_secret, redirect_uris[0]
//     );

//     console.log(config.tokenJson);

//     return fileReader.readFile(config.tokenJson);
// }