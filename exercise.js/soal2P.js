function concateStr(arr) {
    let removeStr = arr.pop()
    return arr.join(",") + ", and " + removeStr
}

console.log(concateStr(["apple", "banana", "cherry", "date"]))