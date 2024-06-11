function smallest(arr) {
    arr.sort((a, b) => a - b)
    return arr[1]
}

console.log(smallest([5, 3, 1, 7, 2, 6]))