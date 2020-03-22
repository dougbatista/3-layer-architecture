const { google } = require("googleapis");
const fileManeger = require("../utils/FileSystemAbstraction");
const config = require("../config");
const constants = require("../constants/google.constants");

class AuthorizeClient {
 
    async validateToken(pageCode) {

        const credentials = await fileManeger.readFile(config.credentialsJson);
        let oAuth2Client = this.generateOAuth2Client(credentials);
        let token = await this.tokenCheck(oAuth2Client);

        if (!token && !pageCode) {
            return {
                authUrl: this.genarateAuthUrl(oAuth2Client),
                message: "Authorize this app by visiting this url: "
            };
        }
        else if (token) return token;
        else {
            try {
                return await this.writeToken(oAuth2Client, pageCode);
            } catch (err) {
                throw err;
            }
        }
    }

    async tokenCheck(oAuth2Client) {
        try {
            let token = await fileManeger.readFile(config.tokenJson);
            oAuth2Client.setCredentials(token);
            console.log("Já estou com token -> " + token);
            return oAuth2Client;
        } catch (err) {
            console.log("Não estou com token -> " + err)
            return false;
        }
    }

    async writeToken(oAuth2Client, pageCode) {
        oAuth2Client.getToken(pageCode, async (err, token) => {

            if (err) return console.error("Error retrieving access token", err);
            oAuth2Client.setCredentials(token);
            try {
                await fileManeger.writeFile(config.tokenJson, JSON.stringify(token))
                return oAuth2Client;
            } catch (err) {
                console.log("Err to write the token file -> " + err);
                throw err;
            }
        });
    }

    genarateAuthUrl(oAuth2Client) {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: constants.SCOPES,
        });
        return authUrl;
    }

    generateOAuth2Client(credentials) {
        const { client_secret, client_id, redirect_uris } = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(
            client_id, client_secret, redirect_uris[0]
        );
        return oAuth2Client;
    }
}
module.exports = new AuthorizeClient();