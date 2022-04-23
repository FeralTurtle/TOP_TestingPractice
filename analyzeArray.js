const average = (numberArray) => {
    const sum = numberArray.reduce(
        (prev, current) => prev + current,
        0
    );
    const arrayAverage = sum / numberArray.length;
    return arrayAverage;
};

const min = (numberArray) => {
    return Math.min(...numberArray);
};

const max = (numberArray) => {
    return Math.max(...numberArray);
};

const length = (numberArray) => {
    return numberArray.length;
};

const analyzeArray = (numberArray) => {
    const infoObject = {
        average: average(numberArray),
        min: min(numberArray),
        max: max(numberArray),
        length: length(numberArray)
    };
    return infoObject;
};

export { average, min, max, length, analyzeArray };
