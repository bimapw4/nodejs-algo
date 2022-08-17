
function printDigitValue(params) {
    const reg = /\D/g
    const val = params.replace(reg, "")

    var position = 1;
    console.log(val)

    for (var i = 0; i < val.length; i++) {

        // console.log(position)
        var lengthNol = val.length - position
        var nol = '';

        for (let j = 0; j < lengthNol; j++) {
            nol += '0';
        }    
        position++
        var newStr = val.charAt(i) + nol
        console.log(newStr)

    }

    // console.log(newStr)
}

printDigitValue("9.86-A5.321")