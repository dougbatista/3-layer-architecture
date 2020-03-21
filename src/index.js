const appFile = __dirname + "/server.js";

if(process.env.NODE_ENV === "dev") {
    const app = require(appFile);
    const PORT = process.env.DEV_PORT ? process.env.DEV_PORT : 3000;
    app.init(PORT);
}