// intergers

const maxSize = 5;
const intergers = [5, 10, 24, 3, 6, 7, 8];

function insertWithMaxSize(maxSize, ...intergers) {
    let result = [];

    for (let i = 0; i < intergers.length; i++) {
        if (result.length === maxSize) {
            break;
        }
        result.push(intergers[i]);
    }
    return result;
}

console.log(insertWithMaxSize(maxSize, ...intergers));