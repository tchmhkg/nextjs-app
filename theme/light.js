const light = {
  theme: {
    background: '#eaeaeb',
    border: '#dfdfdf',
    backgroundAlt: '#dbdbdb',
    borderAlt: '#bdbdbd',
    text: '#171717',
    buttonText: '#ebffff',
    primary: '#0ECD9D',
    inactive: '#2E3440',
    chartLine: '#171717',
    inactiveLegend: '#777777',
    tooltipLabel: '#fafafa',
    chartDataZoomBackground: '#8392A5',
    toggleBackground: '#8392A5',
  },
};

export default light;

export const chartLightTheme = {
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
           '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
      backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
              [0, 'rgb(255, 255, 255)'],
              [1, 'rgb(240, 240, 255)']
          ]
      },
  },
  title: {
      style: {
          color: '#000',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  subtitle: {
      style: {
          color: '#666666',
          font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
      }
  },
  legend: {
      itemStyle: {
          font: '9pt Trebuchet MS, Verdana, sans-serif',
          color: 'black'
      },
      itemHoverStyle:{
          color: 'gray'
      }   
  }
};
