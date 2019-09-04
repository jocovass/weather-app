import Chart from 'chart.js';

Chart.defaults.global.defaultColor = 'wihte';
export default class MyChart {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {},
      options: {
        tooltips: {},
        layout: {},
        legend: {},
        title: {},
      },
    });
  }

  updateChart(obj) {
    this.chart.type = 'bar';
    this.chart.options = {
      title: {
        display: true,
        text: obj.date,
        fontSize: 18,
        fontColor: '#fff',
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
            },
            gridLines: {
              color: 'rgba(250, 250, 250, .3)',
              zeroLineWidth: '2',
              zeroLineColor: 'rgba(250, 250, 250, .3)',
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: 'white',
            },
            gridLines: {
              display: 'none',
            },
          },
        ],
      },
      tooltips: {
        mode: 'point',
        displayColors: false,
        titleFontColor: '#fff',
        titleFontSize: 18,
        titleFontStyle: 'bold',
        titleMarginBottom: 9,
        xPadding: 20,
        yPadding: 10,
        callbacks: {
          title: function(title) {
            return title.text;
          },
          label: function(tooltipItem, data, dataset) {
            // console.log(data);
            // console.log(tooltipItem);
            // console.log(dataset);
            const label = `Temperature: ${tooltipItem.value}°C`;
            return label;
          },
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    };

    const labels = [];
    const data = [];

    for (let i = 0; i < obj.temp.length; i += 1) {
      labels.push(obj.temp[i].time);
      data.push(obj.temp[i].temp);
    }

    this.chart.data = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: function(context) {
            const index = context.dataIndex;
            const value = context.dataset.data[index];
            if (value > 10) {
              return value > 20 ? '#ff3c00' : '#ff7b00';
            }

            return value < 0 ? '#032450' : '#095dca';
          },
        },
      ],
    };

    this.chart.update();
  }
}
