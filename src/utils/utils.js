const toString = Object.prototype.toString
/**
 *
 * @param {any} val
 * @returns val的原始类型
 */
export const getType = (val) => {
    return toString.call(val)
}

/**
 *
 * @param {Number} time 睡眠时间，单位ms
 * @returns
 */
export const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
