
/**
 * 合并配置
 * @param {Object} opts 源配置
 * @param {Object} extOpts 扩展的配置
 * 只用于合并echart图表配置，切勿用于其他地方（忽略了typeof document.all 等特性）
 */
export const mergeOptions = (opts, extOpts) => {
    const arr = Object.entries(extOpts)
    arr.forEach(([key, val]) => {
        if (Array.isArray(val) || !val || !opts[key] || typeof val !== 'object') {
            // 数组、空置、非对象类型的值直接覆盖
            opts[key] = val
            return
        }
        mergeOptions(opts[key], val)
    })
}
