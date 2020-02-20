import {newsDate, newsVolumes} from './data.js'

export const planetChartData = {
  type: 'bar',
  data: {
    // labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'test1', 'test2'],
    labels: newsDate,
    datasets: [
      { // one line graph
        label: 'Number of Moons',
        type: 'bar',
        // data: [0, 0, 1, 2, 67, 62, 27, 14],
        data: newsVolumes,

        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          'red',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Planet (x1,000 km)',
        data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
        backgroundColor: [
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
          'rgba(0, 0,132, 1)', // Green
        ],
        borderColor: [
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',
          'blue',

        ],
        borderWidth: 3
      },
      

    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default planetChartData;