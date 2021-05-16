const hexDigits = '0123456789abcdef'
module.exports = function () {
    const token = Array.from({ length: 32 })
        .map(() => Math.floor(Math.random() * 16))
        .map(i => hexDigits[i])
        .join('')
        .replace(/([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})/, '$1-$2-$3-$4-$5')
    return {
        token: 'token-' + token
    }
}
