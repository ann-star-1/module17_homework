
const getMonth = require('./example');

describe("test getMonth function ", () => {
    it("result of test getMonth 8 function", () => expect(getMonth(8)).toBe('август'));
    it("result of test getMonth 3 function", () => expect(getMonth(3)).toBe('март'));
    it("result of test getMonth 0 function", () => expect(getMonth(0)).toBe(undefined));
});



