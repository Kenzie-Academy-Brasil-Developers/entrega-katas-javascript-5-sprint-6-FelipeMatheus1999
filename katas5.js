//Test functions

const testReverseString1 = () => {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testReverseString2 = () => {
    let result = reverseString("Óla Mundo");
    let expected = "odnuM alÓ";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testReverseSentence1 = () => {
    let result = reverseString("Ocarina of Time");
    let expected = "emiT fo aniracO";
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`);
}

const testReverseSentence2 = () => {
    let result = reverseString("Return of Samus");
    let expected = 'sumaS fo nruteR';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testMinimumValue1 = () => {
    let result = minimumValue([3, 5, 4, 6]);
    let expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testMinimumValue2 = () => {
    let result = minimumValue([-2, 10, 3, 2, 6, 0]);
    let expected = -2;
    console.assert(result === expected, `esperado: ${expected} obtido: ${result}`);
}

const testMaximumValue1 = () => {
    let result = maximumValue([4, 5, 10, -2, 7]);
    let expected = 10;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testMaximumValue2 = () => {
    let result = maximumValue([200, 40, 201, 54]);
    let expected = 201;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(13);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(40);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testDistinctValues1 = () => {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = "1, 3, 5, 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testDistinctValues2 = () => {
    let result = distinctValues([2, 5, 2, 5, 7, 8]);
    let expected = "2, 5, 7, 8";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCountValues1 = () => {
    let result = countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = "1(3), 3(3), 5(2), 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCountValues2 = () => {
    let result = countValues([2, 5, 2, 5, 7, 8]);
    let expected = "2(2), 5(2), 7(1), 8(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a - b + c - d", {a: 2, b: 5, c: 30, d: 4});
    let expected = 23;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}


//Functions

const reverseString = string => {
    let reverse = [];

    for (let i = 0; i < string.length; i++) {
        reverse.unshift(string[i]);
    }
    
    return reverse.join('');
}

const reverseSentence = sentence => {
    let reverse = [];

    sentence = sentence.split(' ')
    for (let i = 0; i < sentence.length; i++) {
        reverse.unshift(sentence[i]);
    }
    
    return reverse.join(' ');
}

const minimumValue = array => {
    let less = array[0];

    array.forEach(number => {

        if (number < less) {
            less = number;
        }
    })

    return less;
}

const maximumValue = array => {
    let major = array[0];

    array.forEach(number => {
        if (number > major) {
            major = number
        }
    })

    return major;
}

const calculateRemainder = number => {
    return number % 2;
}

const distinctValues = array => {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        if (!numbers.includes(array[i])) {
            numbers.push(array[i]);
        }
    }

    return numbers.join(', ');
}

const countValues = array => {
    let numbers = [];
    let countedNumbers = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!numbers.includes(array[i])) {
            numbers.push(array[i]);
        }
    }
    
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        let currentNumber = numbers[i];

        for (let j = 0; j < array.length; j++) {
            if (currentNumber === array[j]) {
                count++;
            }
        }

        countedNumbers.push(`${currentNumber}(${count})`)
    }

    return countedNumbers.join(', ')
}

const evaluateExpression = (string, object) => {
    let vowels = ["a", "b", "c", "d", "+", "-"];
    let newString = [];

    for (let letters in string) {
        if (vowels.includes(string[letters])) {
            let letter = string[letters];
            
            if (object[letter] !== undefined) {
                newString.push(object[letter]);
            }

            else {
                newString.push(letter);
            }
        }
    }

    let expression = newString.join(' ');

    return eval(expression);
}


//Calling functions

testReverseString1();
testReverseString2();
testReverseSentence1();
testReverseSentence2();
testMinimumValue1();
testMinimumValue2();
testMaximumValue1();
testMaximumValue2();
testCalculateRemainder1();
testCalculateRemainder2();
testDistinctValues1();
testDistinctValues2();
testCountValues1();
testCountValues2();
testEvaluateExpression1();
testEvaluateExpression2();