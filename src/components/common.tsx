import {
  Box,
  PseudoBox,
  useColorMode,
  useTheme,
  BoxProps,
  PseudoBoxProps,
} from '@chakra-ui/core';
import React from 'react';

export const Container = ({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) => (
  <Box m="0 auto" px={4} maxWidth={800} {...props}>
    {children}
  </Box>
);
export const Card = ({
  children,
  ...props
}: { children: React.ReactNode } & PseudoBoxProps) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const bgColor = {
    light: theme.colors.white,
    dark: theme.colors.gray[700],
  }[colorMode];

  return (
    <PseudoBox
      shadow="md"
      borderWidth="1px"
      p={4}
      bg={bgColor}
      borderRadius="lg"
      {...props}
    >
      {children}
    </PseudoBox>
  );
};
