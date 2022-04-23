import { average, min, max, length, analyzeArray } from "./analyzeArray";

const testArray = [1,8,3,4,2,6];
const testObject = {
    average: average(testArray),
    min: min(testArray),
    max: max(testArray),
    length: length(testArray)
};

test('returns an object with properties based on array values', () => {
    expect(analyzeArray(testArray)).toEqual(testObject);
});
