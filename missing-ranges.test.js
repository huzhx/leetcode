const findMissingRanges = require('./missing-ranges');


test('nums = [], lower = 0, upper = 99 \
=> ["0->99"]', () => {
    const nums = [];
    const lower = 0;
    const upper = 99;
    const result = findMissingRanges(nums, lower, upper);
    const expected = ["0->99"];
    expect(result).toEqual(expected);
});

test('nums = [0], lower = 0, upper = 99 \
=> ["1->99"]', () => {
    const nums = [0];
    const lower = 0;
    const upper = 99;
    const result = findMissingRanges(nums, lower, upper);
    const expected = ["1->99"];
    expect(result).toEqual(expected);
});

test('nums = [1], lower = 0, upper = 99 \
=> ["0","2->99"]', () => {
    const nums = [1];
    const lower = 0;
    const upper = 99;
    const result = findMissingRanges(nums, lower, upper);
    const expected = ["0","2->99"];
    expect(result).toEqual(expected);
});

test('nums = [99], lower = 0, upper = 99 \
=> ["0->98"]', () => {
    const nums = [99];
    const lower = 0;
    const upper = 99;
    const result = findMissingRanges(nums, lower, upper);
    const expected = ["0->98"];
    expect(result).toEqual(expected);
});

test('nums = [0,1,3,50,75], lower = 0, upper = 99 \
=> ["2","4->49","51->74","76->99"]', () => {
    const nums = [0,1,3,50,75];
    const lower = 0;
    const upper = 99;
    const result = findMissingRanges(nums, lower, upper);
    const expected = ["2","4->49","51->74","76->99"];
    expect(result).toEqual(expected);
});
