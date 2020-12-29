let auth = (req, res, next) => {
    let allHeaders = req.headers;
    let token = allHeaders.token;
    if (token === 'nareshIt') {
        next();
    } else {
        res.send({ message: 'unauthrised user' });
    }
};
module.exports = auth;