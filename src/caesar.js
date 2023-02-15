function caesar(str, shift) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let result = []

    str.split('').forEach(x => {
        if (lower.includes(x)) {
            result.push(
                shifted(lower, shift, x)
            )
        } else if (upper.includes(x)) {
            result.push(
                shifted(upper, shift, x)
            )
        } else {
            result.push(x)
        }
    });
    return result.join('')
  }

// private

function shifted(alpha, shift, x){
    return alpha.at(-26 + ((alpha.indexOf(x)) + shift))
}
  
export { caesar }