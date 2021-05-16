<template>
    <div>
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
                        data: Array.from({ length: 7 }).map(() => Math.random() * 100)
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
.chart-demo{
    width: 400px;
    height: 200px;
    padding: 18px;
    border: 1px solid #ddd;
}
</style>
