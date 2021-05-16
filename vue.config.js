const mockApi = require('./mock/index')
module.exports = {
    lintOnSave: false,
    devServer: {
        before (app) {
            mockApi(app)
        }
    }
}
