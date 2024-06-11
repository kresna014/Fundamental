// without sort

function minMax(arr) {
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    let average = arr.reduce((a, b) => a + b) / arr.length

    return {lowest, highest, average}
}

console.log(minMax([12, 5, 23, 18, 4, 45, 31]))
console.log(minMax2([12, 5, 23, 18, 4, 45, 31]))

// with sort

function minMax2(arr) {
    arr.sort((a, b) => a - b)
    let lowest = arr[0]
    let highest = arr[arr.length - 1]
    let average = arr.reduce((a, b) => a + b) / arr.length

}