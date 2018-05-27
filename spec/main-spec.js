const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('2公里内起步价：', function() {
        var result = main(2);
        expect(6).toEqual(result);
    })

    it('2公里内起步价,停车等待加收是：', function() {
        var result = main(2, 2);
        expect(7).toEqual(result);
    })

    it('2公里外，8公里内：', function() {
        var result = main(3);
        expect(7).toEqual(result);
    })

    it('2公里外，8公里内，停车等待：', function() {
        var result = main(4, 2);
        expect(8).toEqual(result);
    })

    it('8公里外', function() {
        var result = main(10);
        expect(13).toEqual(result);
    })

    it('8公里外,停车等待', function() {
        var result = main(10, 5);
        expect(14).toEqual(result);
    })

});

