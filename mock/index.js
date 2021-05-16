function apiHandler (req, res) {
    const data = {
        success: true,
        code: 200
    }
    try {
        // console.log(req)
        // console.log('req.path', req.path)
        const filePath = req.path.replace(/^\/api\//, './data/')
        const fun = require(filePath)
        try {
            delete require.cache[require.resolve(filePath)]
            data.obj = fun(req)
        } catch (error) {
            data.code = 503
            data.success = false
            console.log(error)
        }
    } catch (error) {
        data.code = 404
        data.success = false
        console.log(error)
    }
    res.send(data)
}
module.exports = function (app) {
    app.post('/api/*', apiHandler)
    app.get('/api/*', apiHandler)
}
