function wrapGifts(array) {
    let arr = []
    let upperBox = ''
    for (let i = 0; i <= array[0].length; i++) {
        upperBox += '*'
    }

    arr.push(upperBox)

    for (let i = 0; i <= array.length - 1; i++) {
        arr.push('*' + array[i] + '*')
    }

    arr.push(upperBox)

    let newArr = arr.join('\n')


    return newArr
}