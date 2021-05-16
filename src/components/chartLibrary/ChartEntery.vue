<template>
    <div class="chart-wrap"></div>
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import {
    LineChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers'

import { mergeOptions } from './utils'
import themData from './config/them.json'

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
)

export default {
    data () {
        return {
            chartOption: {
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                }
            }
        }
    },
    props: {
        chartData: {
            type: Object,
            default: null
        },
        extendOpt: {
            type: Object,
            default: null
        }
    },
    created () {
        this.echartInstance = null // echart 实例
        this.mergeOptions()
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.echartInstance = echarts.init(this.$el, 'customed')
            echarts.registerTheme('vintage', themData)
            this.setChartOption()
        },
        setChartOption () {
            this.echartInstance.setOption(this.chartOption)
        },
        mergeOptions () {
            const extOpt = this.extendOpt
            if (!extOpt) {
                return
            }
            // const option = this.chartOption
            mergeOptions(this.chartOption, extOpt)
        }
    }
}
</script>
<style lang="scss" scoped>
.chart-wrap{
    height: 100%;
}
</style>
