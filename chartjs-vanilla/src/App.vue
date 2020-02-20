<template>
  <div id="app">
    
    
    <ChartComponent :parentData="parentData"></ChartComponent>


    <!-- <canvas id="planet-chart"></canvas> -->
    
    <!-- 
      1. 데이터 구조가 어떻게 되지?
      2. 데이터를 크롤링 해서 아래로 내려주기만 하면 되는 거 아닌가?

    -->
    

  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from './chart-data/chart-data'

import ChartComponent from './components/ChartComponent'


export default {
  name: 'app',
  components: {
    ChartComponent,
  },
  data () {
    return {
      planetChartData: planetChartData,
      // 데이터를 ChartComponent 전달해야 함
      parentData: ['데이터가', '잘 내려가나요? 22'],

    }
  },
  mounted() {
    // Chart를 생성할 필요 없음, 데이터를 밑으로 내려주기만 함
  },
  methods: {

  },

}//default
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
