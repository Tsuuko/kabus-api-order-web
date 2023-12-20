import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

export const RoundedFrame = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => (
    <Box borderWidth={1} p={3} rounded={5} {...props} ref={ref}>
      {children}
    </Box>
  )
);
