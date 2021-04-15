import { FormControl, FormLabel, FormErrorMessage, Button, Box } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { Container } from '../components/Container'
import InputComponent from '../components/Input'

interface registerProps {
    
}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Container variant="small">
      <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        
      }}
    >
      {({isSubmitting}) => (
        <Form>
        <InputComponent name="username" placeholder="username"
        label="Username" />
        <Box mt={4}>
        <InputComponent name="password" placeholder="password"
        label="Password" type="password" />

        </Box>
         <Button mt={4} maxW="100%" isLoading={isSubmitting}
       >Sign Up</Button> 
        </Form>
      )}
    </Formik>
    </Container>
  )
}

export default Register

