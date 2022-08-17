let a = [1,2,5,7], b = [3,4,8], c = []

function sorted() {
    c = [...a, ...b]

    for (let i = 1; i < c.length; i++) {
        var e = c[i];

        let j
        for (j = i - 1; j >= 0 && c[j] > e ; j--) {
            c[j + 1] = c[j]
        }
        
        c[j + 1] = e
    }

    console.log(c)
}

sorted()