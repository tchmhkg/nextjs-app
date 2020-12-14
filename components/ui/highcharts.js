import React, { forwardRef } from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useTheme } from '~/theme';
import { convertHexToRGBA } from '~/utils';

export const AreaHighChart = forwardRef(
  (
    { symbol, data = [], type, callback = () => {}, options, ...props },
    ref
  ) => {
    const { colors } = useTheme();
    options = {
      ...options,
      series: [
        {
          ...options.series[0],
          fillColor: {
            ...options.series[0].fillColor,
            stops: [
              [0, colors.primary1],
              [
                1,
                convertHexToRGBA(colors.primary2, 0.3),
              ],
            ],
          },
        },
      ],
    };

    return (
      <HighchartsReact
        ref={ref}
        options={options}
        highcharts={Highcharts}
        constructorType="stockChart"
        containerProps={{ className: 'chartContainer' }}
      />
    );
  }
);



export const CandleStickHighChart = forwardRef(
  (
    { symbol, options, ...props },
    ref
  ) => {

    return (
      <HighchartsReact
        ref={ref}
        options={options}
        highcharts={Highcharts}
        constructorType="stockChart"
        containerProps={{ className: 'chartContainer' }}
      />
    );
  }
)