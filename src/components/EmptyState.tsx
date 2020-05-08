import React from 'react';
import { Container, Card } from './common';
import { Box, Icon, Stack, Text, BoxProps } from '@chakra-ui/core';

const EmptyState = ({
  text = '... ',
  children,
  ...rest
}: {
  children?: React.ReactNode;
  text: string;
} & BoxProps) => (
  <Container textAlign="center" {...rest}>
    <Card>
      <Stack spacing={4}>
        {!!children && <Box>{children}</Box>}
        <Text fontSize="sm">{text}</Text>
      </Stack>
    </Card>
  </Container>
);

export const NoConnection = () => (
  <EmptyState text="There is no internet connection." mt={-12}>
    <Icon name="warning" color="red.500" size="30px" />
  </EmptyState>
);

export default EmptyState;
