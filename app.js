module.exports = function (cb) {
    try {
        return cb();
    } catch (err) {
        return undefined;
    }
};
