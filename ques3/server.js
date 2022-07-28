const reverse = (num) => {
    num = parseInt(String(num).split("").reverse().join(""),10)
    console.log(num)
}

reverse(122334);