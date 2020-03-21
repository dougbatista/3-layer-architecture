const init = (port) => {
    const app = require('./app');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports.init = init;