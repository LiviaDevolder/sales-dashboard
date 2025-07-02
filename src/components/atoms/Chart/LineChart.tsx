'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Chart, useChart } from '@chakra-ui/charts';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { SalesData } from '../../../types';

interface LineChartProps {
  data: SalesData[];
  title?: string;
  height?: number;
  'data-testid'?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  title,
  height = 400,
  'data-testid': testId,
}) => {
  const chart = useChart({
    data,
    series: [{ name: 'sales', color: 'blue.500' }],
  });

  return (
    <Box data-testid={testId}>
      {title && (
        <Heading size="md" mb={4}>
          {title}
        </Heading>
      )}
      <Box height={height}>
        <Chart.Root chart={chart}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={chart.data}>
              <CartesianGrid stroke={chart.color('border')} vertical={false} />
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey={chart.key('month')}
                tickFormatter={value => value.slice(0, 3)}
                stroke={chart.color('fg.muted')}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                stroke={chart.color('fg.muted')}
                label={{
                  value: 'Vendas',
                  position: 'left',
                  angle: -90,
                  dx: -10,
                  fill: chart.color('fg.muted'),
                }}
              />
              <Tooltip content={<Chart.Tooltip />} />
              {chart.series.map(item => (
                <Line
                  key={item.name}
                  type="monotone"
                  dataKey={chart.key(item.name)}
                  stroke={chart.color(item.color)}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </Chart.Root>
      </Box>
    </Box>
  );
};
