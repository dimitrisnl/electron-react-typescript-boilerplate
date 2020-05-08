import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  useColorMode,
  useTheme,
} from '@chakra-ui/core';
import { NavLink, useLocation } from 'react-router-dom';

const routeButtons: Array<{ text: string; slug: string }> = [
  { text: 'Page 1', slug: '/' },
  { text: 'Page 2', slug: '/page-2' },
];

const Toolbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: theme.colors.white,
    dark: theme.colors.gray[700],
  }[colorMode];

  return (
    <Flex
      p={2}
      bg={bgColor}
      as="header"
      alignItems="center"
      width="100%"
      position="fixed"
      top={0}
      zIndex={4}
      boxShadow="md"
    >
      <ButtonGroup>
        {routeButtons.map(btn => (
          <Button
            borderWidth={1}
            fontWeight="medium"
            variant={location.pathname === btn.slug ? 'solid' : 'outline'}
            size="xs"
            as={NavLink}
            key={btn.slug}
            // @ts-ignore
            to={btn.slug}
            textDecoration="none"
          >
            {btn.text}
          </Button>
        ))}
      </ButtonGroup>
      <Button variant="outline" ml="auto" size="xs" onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  );
};

export default Toolbar;
