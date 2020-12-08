module.exports = {
    setCookie: (req, res, next) => {

        req.setDate = new Date().toISOString();

        res.set('Set-Cookie', 'name=Express');

        next();
    },
    auth: (req, res, next) => {

        if (req.headers.authorization !== 'token') {
            const error = new Error('Auth failed');
            error.code = 401;
            next(error);
        }

        next()
    }
}