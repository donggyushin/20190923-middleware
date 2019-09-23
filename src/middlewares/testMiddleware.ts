export const testMiddleware = (req, res, next) => {
    console.log('test middleware')
    next()
}