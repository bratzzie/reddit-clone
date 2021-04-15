import { Box } from '@chakra-ui/layout'
import React from 'react'

interface Props {
    variant?: 'small' | 'regular'
}

export const Container = ({children, variant = 'regular'}) => {
    return (
        <Box mt={8} mx="auto" maxW={ variant === 'regular' ? "800px" : '400px'} w="100%">
            {children}
        </Box>
    )
}
