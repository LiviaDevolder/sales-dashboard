import React from 'react';
import { Card, Heading } from '@chakra-ui/react';
import { LineChart } from '../../atoms/Chart';
import type { SalesData } from '../../../types';

interface ChartSectionProps {
  title: string;
  data: SalesData[];
  'data-testid'?: string;
}

export const ChartSection: React.FC<ChartSectionProps> = ({
  title,
  data,
  'data-testid': testId,
}) => {
  return (
    <Card.Root variant="outline" data-testid={testId}>
      <Card.Header>
        <Heading size="md" textAlign="center">
          {title}
        </Heading>
      </Card.Header>
      <Card.Body minHeight="300px">
        <LineChart data={data} />
      </Card.Body>
    </Card.Root>
  );
};
