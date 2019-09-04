import { elements } from './base';

export default canvas => {
  canvas.setAttribute('id', 'myChart');

  const chartCont = document.createElement('div');
  const chartWrap = document.createElement('div');
  chartCont.className = 'chart-container';
  chartWrap.className = 'chart-wrapper';
  chartWrap.appendChild(canvas);
  chartCont.appendChild(chartWrap);

  document.querySelector(elements.weatherData).appendChild(chartCont);
};
