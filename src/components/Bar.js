import { Bar } from 'vue-chartjs'

export default Bar.extend({
  props: ["data", "options"],
  mounted () {
    this.renderChart({
      labels: [ "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56],
        }
      ],
      options:{
        "legend": {
          "display": true,
          "position": "top"
        },
        "scales": {
          "xAxes": [{
            "categorySpacing":0
          }]}
      }
    })
  }
})
