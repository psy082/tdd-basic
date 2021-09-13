const getCalculationOutput = (args) => {
    const source = parseArguments(args);
    const variance = calculateSumOfSquares(source);
    return `분산: ${variance}`;
}

const parseArguments = (args) => args.map(arg => Number(arg));

export const calculateSumOfSquares = (source) => {
    const mean = calculateAverage(source);
    return calculateSum(source.map(x => mean - x).map(x => x * x));
}

export const calculateAverage = (source) => {
    const sum = calculateSum(source);
    return sum / source.length;
}

export const calculateSum = (source) => source.reduce((res, num) => res + num, 0);

export default getCalculationOutput;