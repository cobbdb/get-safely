describe('get-safely', function () {
    var get = require('../app.js');
    it('does not throw errors', function () {
        expect(function () {
            get(function () {});
        }).not.toThrow();
    });
    it('returns undefined on error', function () {
        var res = get(function () {
            some.bad.object;
        });
        expect(res).toBeUndefined();
    });
    it('returns value normally', function () {
        var res = get(function () {
            return 'test123';
        });
        expect(res).toEqual('test123');
    });
});
