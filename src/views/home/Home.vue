<template>
    <div class="chart-box">
        <div class="chart-boxtitle">chart demo 标题</div>
        <div class="chart-demo">
            <chart-entery
                :chartData="chartData"
                :extendOpt="chartOption"
            ></chart-entery>
        </div>
    </div>
</template>
<script>
import ChartEntery from '@/components/chartLibrary/ChartEntery.vue'
// ["#e8692f", "#e83a30", "#e72f8c", "#892fe8", "#4030e8", "#3080e8", "#31c9e8", "#2de8bd", "#31e749", "#a4e82f", "#e8e22f", "#e7b72f", "#e88c30", "#c67d54", "#269ea1", "#143192", "#ffa4a4", "#bd1210"]
export default {
    components: { ChartEntery },
    data () {
        return {
            chartData: {},
            chartOption: {
                xAxis: {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                        type: 'line',
                        name: '数据项一',
                        data: Array.from({ length: 7 }).map(() => (Math.random() * 100).toFixed(2))
                    },
                    {
                        type: 'bar',
                        name: '数据项二',
                        data: Array.from({ length: 7 }).map(() => (Math.random() * 100).toFixed(2))
                    }
                ]
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            // this.chartOption
        }
    }
}
</script>
<style lang="scss" scoped>
.chart-boxtitle{
    line-height: 42px;
    padding: 0 18px;
}
.chart-demo{
    height: calc(100% - 42px);
    // padding: 18px;

    // background: linear-gradient(180deg, #2274DC 0%, #191D6A 100%);
}
.chart-box{
    width: 600px;
    height: 400px;
    border: 1px solid #ddd;
}
</style>
