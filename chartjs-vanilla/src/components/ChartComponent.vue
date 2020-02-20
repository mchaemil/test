<template>
  <div>

    <h1>{{ parentData }}</h1>
    <canvas id="planet-chart"></canvas>
    
  </div>
</template>

<script>
import planetChartData from '../chart-data/chart-data'






export default {
  props: ['parentData'], // 라벨: 날짜, 데이터: 보도량
  data () {
    return {
      planetChartData: planetChartData,

    }
  },
  mounted() {
    this.createChart('planet-chart', planetChartData)
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);      
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,    

        // data: newsVolumes,
        // 'data.labels': constLabels, 
      });
    }
  },
}
</script>

<style scoped>

</style>