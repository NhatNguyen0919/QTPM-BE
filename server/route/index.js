const userRouter = require('./user')
const resRouter = require('./restaurant')
const { notFound, errHandler } = require('../middleware/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/restaurant', resRouter)
    app.use(notFound);
    app.use(errHandler);
}

module.exports = initRoutes