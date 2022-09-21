function missingReindeer(ids) {
    let numberLeft = 0

    for (let i = 0; i <= ids.length; i++) {
        if (!ids.includes(i)) {
            numberLeft = i
        }
    }

    return numberLeft
}