import { Box, Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/button';
interface Props {
    
}

const NavBar = (props: Props) => {
   //TODO: const [{data, fetching}] = useMeQuery()
   let body = null;
   if(fetching){

   } else if (!data?.me){
        body = ( 
            <>
        <NextLink href="/login">
        <Link mr={2}>Login</Link>
    </NextLink>
    <NextLink href="/register">
        <Link>Register</Link>
    </NextLink>
    </>
    )
   } else {
        body = (
        <Flex>
            <h1>{data.me.username}</h1>
            <Button variant="link">Logout</Button>
            </Flex>)
   }
    return (
        <Flex bg="tomato" p={4}>
            <Box ml={"auto"}>
                {body}
               
            </Box>
        </Flex>
    )
}

export default NavBar
