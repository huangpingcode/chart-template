
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
