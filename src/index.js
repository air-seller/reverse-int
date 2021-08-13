module.exports = function reverse (n) {
    let arr = n.toString().split("")
    let result = arr.reverse().join('')
    return result.replace("-", "")
}
